import { countries } from "../countryList";

export const uploadArtworkDetailInputMocks = [
  {
    name: "title",
    type: "text",
    label: "Title",
    required: true,
    placeholder: "Add artwork title or 'unknown'",
  },
  {
    name: "year",
    type: "text",
    label: "Year",
    required: true,
    placeholder: "YYYY",
  },
  {
    name: "medium",
    type: "select",
    label: "Medium",
    required: true,
    options: [
      "Acryllic",
      "Oil",
      "Fabric",
      "Mixed media",
      "Ink",
      "Collage or other works on paper",
      "Ankara",
      "Photography",
      "Charcoal",
      "Canvas",
      "Paper",
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
  {
    name: "certificate_of_authenticity",
    type: "select",
    label: "Certificate of authenticity",
    required: true,
    options: ["Yes", "No"],
  },
  {
    name: "signature",
    type: "select",
    label: "Signature",
    required: true,
    options: ["By artist", "By gallery", "No signature"],
  },
  {
    name: "framing",
    type: "select",
    label: "Framing",
    required: true,
    options: ["Framed", "Rolled"],
  },
  {
    name: "artwork_description",
    type: "textarea",
    label: "Artwork description (optional)",
    required: false,
    placeholder: "Describe the artwork",
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
    name: "weight",
    type: "text",
    label: "Weight",
    required: true,
    placeholder: "e.g 10kg",
  },
  {
    name: "depth",
    type: "text",
    label: "Depth (optional)",
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
    placeholder: "e.g $1200",
  },
  {
    name: "shouldShowPrice",
    type: "select",
    label: "Display price",
    required: true,
    options: ["Yes", "No"],
  },
  {
    name: "carrier",
    type: "select",
    label: "Preferred shipping carrier",
    required: true,
    options: ["USPS", "UPS", "FedEx", "Maersk", "DHL", "CMA CGM"],
  },
];

export const uploadArtistDetailsInputMocks = [
  {
    name: "artist",
    type: "text",
    label: "Artist name",
    required: true,
    placeholder: "Artist full name",
  },
  {
    name: "artist_birthyear",
    type: "text",
    label: "Birth year",
    required: true,
    placeholder: "Artist's birth year",
  },
  {
    name: "artist_country_origin",
    type: "select",
    label: "Country of origin",
    required: true,
    options: countries,
  },
];
