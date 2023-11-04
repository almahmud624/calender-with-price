export const getFormatDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
};
