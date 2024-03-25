export function getCurrentMonthAndYear(): { month: string; year: string } {
  const date = new Date();
  const monthNumber = date.getMonth();
  const year = date.getFullYear().toString();

  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month name from the array based on the month number
  const monthName = monthNames[monthNumber];

  return { month: monthName, year: year };
}
