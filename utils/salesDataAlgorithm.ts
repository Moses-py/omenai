export const salesDataAlgorithm = (salesData: any) => {
  const groupedData = salesData.reduce(
    (accumulator: any, currentValue: any) => {
      const { month, value } = currentValue;
      accumulator[month] = (accumulator[month] || 0) + value;
      return accumulator;
    },
    {}
  );

  const monthlySalesData = monthsOrder.map((month) => {
    const revenue = groupedData[month] || 0;
    return {
      name: month,
      Revenue: revenue,
    };
  });

  return monthlySalesData;
};

const monthsOrder = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
