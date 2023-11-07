export const uploadArtworkDetailInputMocks = [
  {
    name: "artist",
    type: "text",
    label: "Artist",
    required: true,
    placeholder: "Full name",
  },
  {
    name: "year",
    type: "text",
    label: "Year",
    required: true,
    placeholder: "YYYY",
  },
  {
    name: "title",
    type: "text",
    label: "Title",
    required: true,
    placeholder: "Add artwork title or 'unknown'",
  },
  {
    name: "medium",
    type: "select",
    label: "Medium",
    required: true,
    options: [
      "Painting",
      "Sculpture",
      "Photography",
      "Print",
      "Drawing",
      "Collage or other works on paper",
      "Design/Decorative art",
      "Textile art",
      "Perfomance art",
      "Architecture",
      "Other",
    ],
  },
  {
    name: "rarity",
    type: "select",
    label: "Rarity",
    required: true,
    options: ["Unique", "Limited edition", "Open edition", "Uknown edition"],
  },

  {
    name: "materials",
    type: "text",
    label: "Materials",
    required: true,
    placeholder: "Add materials",
  },
];

export const uploadArtworkDimensionInputMocks = [
  {
    name: "height",
    type: "text",
    label: "Height",
    required: true,
    placeholder: "e.g 24cm",
  },
  {
    name: "width",
    type: "text",
    label: "Width",
    required: true,
    placeholder: "e.g 24cm",
  },
  {
    name: "depth",
    type: "text",
    label: "Depth",
    required: false,
    placeholder: "e.g 24cm",
  },
];
export const uploadArtworkPriceInputMocks = [
  {
    name: "price",
    type: "text",
    label: "Price",
    required: true,
    placeholder: "Display price",
  },
  {
    name: "display_price",
    type: "select",
    label: "Display price",
    required: true,
    options: ["Yes", "No"],
  },
];
