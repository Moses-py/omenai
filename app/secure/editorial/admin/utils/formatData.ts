function getMonthString(monthNumber: number): string {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[monthNumber];
}

export default function formatDate(date: Date): string {
  const month: string = getMonthString(date.getMonth());
  let day: string = "" + date.getDate();
  const year: number = date.getFullYear();

  if (day.length < 2) {
    day = "0" + day;
  }

  return [month, day, year].join("-");
}
