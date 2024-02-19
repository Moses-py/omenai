export function getCurrentDate(): string {
  const currentDate: Date = new Date();
  const day: number = currentDate.getDate();
  const month: number = currentDate.getMonth() + 1; // Months are zero-based
  const year: number = currentDate.getFullYear();

  // Pad single-digit day and month with leading zero if necessary
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}-${formattedMonth}-${year}`;
}
