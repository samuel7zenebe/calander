import {
  Children,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";
import DayContext from "./DayContext";
import { Week } from "./Week";
import WeekNames from "./WeekNames";
import MonthHeader from "./MonthHeader";
import Month from "./Month";
import { Year } from "./Year";
import { fetchFullMonth, johnsNumber } from "../utils/geezCalander";
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react";

const dateReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_YEAR":
      return { ...state, month: 1, year: state.year + 1 };
      break;
    case "LAST_YEAR":
      return { ...state, month: 13, year: state.year - 1 };
      break;
    case "NEXT_MONTH":
      return { ...state, month: state.month + 1 };
      break;
    case "LAST_MONTH":
      return { ...state, month: state.month - 1 };
      break;
    default:
      throw new Error("Invalid Action Type");
      break;
  }
};
// DateTimeFormat will return us the current date in ethiopic calendar
const [month, day, year] = Intl.DateTimeFormat("en-u-ca-ethiopic", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
})
  .format(new Date())
  .split(" ")[0]
  .split("/");
// user it to initialize the state 
const initialState = {
  day: parseInt(day),
  month: parseInt(month),
  year: parseInt(year),
};

const Day = () => {
  const [state, dispatch] = useReducer(dateReducer, initialState);
  const [today, setToday] = useState(initialState);
  return (
    <DayContext.Provider value={{ state, dispatch, today }}>
       <div className="hover:bg-amber-950 cursor-pointer w-fit p-4 text-white bg-amber-900 flex items-center justify-center max-w-screen">
      <Calendar className="w-10" />
      <h1 className="font-bold"> Today  {today.day}/{today.month}/{today.year}</h1>
      </div>
      <MonthHeader />
      <div>
        <Year />
      </div>
    </DayContext.Provider>
  );
};
export default Day;
