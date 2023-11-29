interface OriginalObject {
  _id: string;
  createdAt: string;
  updatedAt: string;
  artwork_data: Record<string, any>;
  buyer: Record<string, any>;
  gallery_id: string;
  status: string;
  order_id: string;
}

interface FormattedObject extends OriginalObject {
  createdAt: string; // Updated type for formatted date
}

interface FinalObject {
  date: string;
  data: OriginalObject[];
}

export function sortOrdersDataByDate(
  inputArray: OriginalObject[]
): FinalObject[] {
  // Format and sort the data
  const formattedData: FormattedObject[] = inputArray
    .map((item) => {
      const createdAt = new Date(item.createdAt);
      const monthYear = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(createdAt);

      return {
        ...item,
        createdAt: monthYear,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  // Structure the data into the final format using reduce
  const finalData: FinalObject[] = formattedData.reduce(
    (result: FinalObject[], item: FormattedObject) => {
      const existingMonthYear = result.find(
        (entry) => entry.date === item.createdAt
      );

      if (existingMonthYear) {
        existingMonthYear.data.push(item);
      } else {
        result.push({
          date: item.createdAt,
          data: [item],
        });
      }

      return result;
    },
    []
  );

  return finalData;
}

// Example usage:
export const dataArray: OriginalObject[] = [
  {
    _id: "6558bbc73259b064477ab172",
    createdAt: "2023-11-18T13:27:35.100+00:00",
    updatedAt: "2023-11-18T13:27:35.100+00:00",
    artwork_data: {},
    buyer: {},
    gallery_id: "29ece3e6-cbc9-4692-b242-d592303dbebb",
    status: "pending",
    order_id: "3c1a381e-510e-4322-9f2f-2152a4f2851c",
  },
  {
    _id: "6558bbc73259b064477ab172",
    createdAt: "2023-11-18T13:27:35.100+00:00",
    updatedAt: "2023-11-18T13:27:35.100+00:00",
    artwork_data: {},
    buyer: {},
    gallery_id: "29ece3e6-cbc9-4692-b242-d592303dbebb",
    status: "pending",
    order_id: "3c1a381e-510e-4322-9f2f-2152a4f2851c",
  },
  {
    _id: "6558bbc73259b064477ab172",
    createdAt: "2023-11-18T13:27:35.100+00:00",
    updatedAt: "2023-11-18T13:27:35.100+00:00",
    artwork_data: {},
    buyer: {},
    gallery_id: "29ece3e6-cbc9-4692-b242-d592303dbebb",
    status: "pending",
    order_id: "3c1a381e-510e-4322-9f2f-2152a4f2851c",
  },
  {
    _id: "6558bbc73259b064477ab172",
    createdAt: "2023-11-18T13:27:35.100+00:00",
    updatedAt: "2023-11-18T13:27:35.100+00:00",
    artwork_data: {},
    buyer: {},
    gallery_id: "29ece3e6-cbc9-4692-b242-d592303dbebb",
    status: "pending",
    order_id: "3c1a381e-510e-4322-9f2f-2152a4f2851c",
  },
  // Add more objects as needed
];

// const result: FinalObject[] = sortOrdersDataByDate(dataArray);
// console.log(result);
