export function generateCalender(currentDate, month, year) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
  const daysInCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDayOfCurrentMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const calendarArray = [];

  // Add days from the previous month
  for (
    let i = daysInPreviousMonth - firstDayOfCurrentMonth + 1;
    i <= daysInPreviousMonth;
    i++
  ) {
    const date = new Date(year, month - 1, i);
    calendarArray.push({ currentMonth: false, date });
  }

  // Add days from the current month
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(year, month, i);
    calendarArray.push({ currentMonth: true, date });
  }

  return calendarArray;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
