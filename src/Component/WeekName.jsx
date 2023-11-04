import React from "react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export default function WeekName({ day }) {
  return (
    <>
      <div className="grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none font-semibold"
            >
              {day}
            </h1>
          );
        })}
      </div>
    </>
  );
}
