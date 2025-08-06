
const week_names = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const WeekNames = () => {
  return (
    <thead className="flex font-bold">
     {
      week_names.map((name)=>(
        <th key={name} className="w-15 p-1 font-bold text-amber-900">{name}</th>
      ))
     }
    </thead>
  );
};

export default WeekNames;
