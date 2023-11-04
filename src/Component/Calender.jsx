import { getPriceByDate } from "../util/getPriceByDate";
import { numberFormatter } from "../util/numberFormatter";

export default function Calender({
  calenderInfo,
  selectDate,
  setSelectDate,
  currentMonthNo,
}) {
  const { currentMonth, date } = calenderInfo || {};
  const getMonthPrice = () => {
    let content;
    if (currentMonth) {
      const price = getPriceByDate(currentMonthNo + 1)?.[date?.getDate()];
      if (price) {
        content = numberFormatter(price);
      } else {
        content = "--";
      }
    }

    // hide price for passed days
    if (gettingPassedDays()) {
      return;
    }

    if (skipDayes()) {
      return;
    }

    return content;
  };

  const passedDays = new Date().getDate() - 1;
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  // calculate passed days of current month
  const gettingPassedDays = () => {
    let isPassDays;
    if (month === currentMonthNo && year === date.getFullYear()) {
      if (passedDays >= date.getDate()) {
        isPassDays = true;
      }
    }

    if (month === currentMonthNo && year < date.getFullYear()) {
      if (passedDays + 1 < date.getDate()) {
        isPassDays = true;
      }
    }
    return isPassDays;
  };

  // calculate upcoming days for next year current month
  const skipDayes = () => {
    let isSkipDayes;
    if (month === currentMonthNo && year < date.getFullYear()) {
      for (let i = 1; i <= passedDays; i++) {
        console.log(i);
        isSkipDayes = true;
      }
    }
    return isSkipDayes;
  };

  return (
    <>
      <div>
        {" "}
        <div className="p-2 text-center h-14 grid place-content-center text-sm">
          <button
            className={`${currentMonth ? "" : "text-gray-400"}
            
            ${
              selectDate.toDateString() === date.toDateString()
                ? "bg-blue-600 text-white !hover:bg-blue-600"
                : "hover:bg-blue-600/10"
            }
            ${currentMonth ? " cursor-pointer " : ""}
            h-12 w-10  grid place-content-center  transition-all select-none disabled:cursor-default disabled:hover:bg-transparent disabled:text-gray-300`}
            onClick={() => {
              setSelectDate(date);
            }}
            disabled={gettingPassedDays()}
          >
            {currentMonth ? date?.getDate() : ""}
            <span className="text-[9px]">{getMonthPrice()}</span>
          </button>
        </div>
      </div>
    </>
  );
}
