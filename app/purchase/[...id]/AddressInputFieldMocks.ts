import { country_and_states } from "./countryAndStateList";

const countryList = country_and_states.map((country) => {
  return country.country;
});
export const userDetails = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
  },
];
export const userLocation = [
  {
    name: "address_line",
    label: "Address line",
    type: "text",
    placeholder: "apt. suit, street name...",
    required: true,
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "City",
    required: true,
  },
  {
    name: "country",
    label: "Country",
    type: "select",
    items: countryList,
    required: true,
  },
  {
    name: "state",
    label: "State",
    type: "select",
    required: true,
  },

  {
    name: "zip",
    label: "Zipcode",
    type: "text",
    placeholder: "Enter your zipcode",
    required: true,
  },
];
