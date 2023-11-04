import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Calender from "./Component/Calender";
import WeekName from "./Component/WeekName";
import { generateCalender, months } from "./util/generateCalender";
import { getFormatDate } from "./util/getFormatDate";

export default function Calendar() {
  const currentDate = new Date();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const currentMonthNo = today.getMonth();
  const currentYear = today.getFullYear();

  const showPreviousMonth = () => {
    // Get the date of the previous month
    const previousMonth = new Date(today);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setToday(previousMonth);
  };

  const showNextMonth = () => {
    // Get the date of the next month
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setToday(nextMonth);
  };

  const getSecondCalenderMonth = () => {
    // Get Second Calender Month
    const secondCalenderMonth = currentMonthNo === 11 ? 0 : currentMonthNo + 1;
    return secondCalenderMonth;
  };

  console.log(currentMonthNo);

  return (
    <div className="flex gap-10 justify-center mx-auto h-screen items-center sm:flex-row flex-col ">
      <div className="shadow">
        <div className="w-full p-3 shadow">
          <h1 className="font-semibold flex items-center">
            <AiOutlineCalendar className="text-sm mr-3" />
            <span>{getFormatDate(selectDate)}</span>
            <span>
              <span className="px-5">-</span> Book round trip for great savings
            </span>
          </h1>
        </div>

        <div className="flex w-full justify-between items-center gap-4 p-3">
          <div className="flex w-full items-center justify-center relative">
            {currentDate.getMonth() !== currentMonthNo ? (
              <BsArrowLeft
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-blue-600 absolute left-0 top-[50%] -translate-y-[50%]"
                onClick={showPreviousMonth}
              />
            ) : undefined}
            <h1 className="select-none font-semibold">
              {months[currentMonthNo]} {currentYear}
            </h1>
          </div>

          <div className="flex w-full relative items-center justify-center">
            <h1 className="select-none font-semibold">
              {months[getSecondCalenderMonth()]}{" "}
              {currentMonthNo === 11 ? currentYear + 1 : currentYear}
            </h1>
            {currentDate.getMonth() !== getSecondCalenderMonth() ? (
              <BsArrowRight
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-blue-600 absolute right-0 top-[50%] -translate-y-[50%]"
                onClick={showNextMonth}
              />
            ) : undefined}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 p-3">
          {[currentMonthNo, getSecondCalenderMonth()]?.map((month, i) => (
            <div key={i}>
              <WeekName />
              <div className="grid grid-cols-7 ">
                {generateCalender(currentDate, month, currentYear).map(
                  (calenderInfo, index) => (
                    <Calender
                      key={index}
                      calenderInfo={calenderInfo}
                      selectDate={selectDate}
                      setSelectDate={setSelectDate}
                      currentMonthNo={month}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
