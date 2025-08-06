import { useContext, useEffect } from "react";
import { fetchFullMonth } from "../utils/geezCalander";
import DayContext from "./DayContext";

export const Week = ({ month, year, week }) => {
  useEffect(() => {});
  const { today } = useContext(DayContext);
  const weekDays = fetchFullMonth(1, month, year).filter((x) => x.week == week);

  return (
    <tr className="flex gap-4 font-bold w-100">
      {weekDays.map((x, index) => (
        <td
          onMouseOver={() => {}}
          className={`w-15 p-1  font-extralight ${
            x.day == today.day && x.month == month && x.month == today.month && x.year == today.year
              ? "font-bold bg-amber-500 text-white"
              : x.month == month
              ? "bg-amber-100 border border-white font-semibold"
              : ""
          }`}
          key={index}
        >
          {x.day}
        </td>
      ))}
    </tr>
  );
};
