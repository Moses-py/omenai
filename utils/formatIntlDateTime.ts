export function formatIntlDateTime(inputDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(inputDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Extract day, month, and year
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const year = date.getFullYear();

  // Add the appropriate suffix to the day
  const dayWithSuffix = addSuffixToDay(day);

  // Extract hour and minute
  const hour = date.getHours();
  const minute = date.getMinutes();

  // Convert hour to 12-hour format and add 'am' or 'pm'
  const formattedHour = formatHour(hour);

  // Construct the final formatted date string
  const finalFormattedDate = `${dayWithSuffix} ${month}, ${year}`;

  //   at ${formattedHour}:${padZero(
  //     minute
  //   )

  return finalFormattedDate;
}

function addSuffixToDay(day: number): string {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function formatHour(hour: number): string {
  const formattedHour = hour % 12 || 12;
  const period = hour < 12 ? "am" : "pm";
  return `${formattedHour}${period}`;
}

function padZero(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}
