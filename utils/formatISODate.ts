export function formatISODate(isoDate: string) {
  const date = new Date(isoDate);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
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

  const dayOfWeek = days[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const day = ("0" + date.getUTCDate()).slice(-2); // Add leading zero if needed
  const year = date.getUTCFullYear();
  let hours = date.getUTCHours();
  const minutes = ("0" + date.getUTCMinutes()).slice(-2); // Add leading zero if needed
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  const formattedHours = ("0" + hours).slice(-2); // Add leading zero if needed

  const dateString = `${dayOfWeek}, ${month} ${day}, ${year}`;
  // ${formattedHours}:${minutes} ${ampm}

  return dateString;
}
