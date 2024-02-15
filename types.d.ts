type InputProps = {
  label: string;
  labelText: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  buttonType?: "button" | "submit";
  buttonText?: "Next" | "Submit";
  onClick?: () => void;
  id?: number;
  onClickPrev?: () => void;
};

type IndividualSignupData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type GallerySignupData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  location: string;
  admin: string;
  description: string;
};

type IndividualRegisterData = Omit<IndividualSignupData, "confirmPassword"> & {
  preferences: string[];
};

type GalleryRegisterData = Omit<GallerySignupData, "confirmPassword">;

type RouteIdentifier = "individual" | "gallery";

type Form = {
  email: string;
  password: string;
};

type GallerySchemaTypes = {
  name: string;
  email: string;
  password: string;
  gallery_id: string;
  admin: string;
  location: string;
  description: string;
  gallery_verified: boolean;
  verified: boolean;
  role: string;
  logo?: string;
};

type IndividualSchemaTypes = {
  name: string;
  email: string;
  password: string;
  user_id: string;
  preferences: string[];
  verified: boolean;
  role: string;
  address?: IndividualAddressTypes;
};

type IndividualAddressTypes = {
  address_line: string;
  city: string;
  country: string;
  state: string;
  zip: string;
  [key: string]: string;
};

type ArtworkSchemaTypes = {
  artist: string;
  year: string;
  title: string;
  medium: string;
  rarity: string;
  materials: string;
  dimensions: ArtworkDimensions;
  url: string;
  pricing: ArtworkPricing;
  art_id: string;
  gallery_id: string;
  impressions?: number;
  like_IDs?: string[];
  artist_birthyear: string;
  artist_country_origin: string;
  certificate_of_authenticity: string;
  artwork_description?: string;
  framing: string;
  signature: string;
  carrier: string;
};

type ArtworkDimensions = {
  width: string;
  height: string;
  depth?: string;
  weight: string;
};

type ArtworkPricing = {
  price: string;
  shouldShowPrice: "Yes" | "No" | string;
};

type ArtworkResultTypes = ArtworkSchemaTypes & {
  _id: string;
  updatedAt: string;
  createdAt: string;
};

type ArtworkUploadStateTypes = {
  artist: string;
  year: string;
  title: string;
  medium: string;
  rarity: string;
  materials: string;
  height: string;
  width: string;
  depth?: string;
  weight: string;
  price: string;
  shouldShowPrice: "Yes" | "No" | string;
  artist_birthyear: string;
  artist_country_origin: string;
  certificate_of_authenticity: string;
  artwork_description?: string;
  framing: string;
  signature: string;
  carrier: string;
};

type CreateOrderModelTypes = {
  artwork_data: Pick<
    ArtworkSchemaTypes,
    "artist" | "pricing" | "title" | "url"
  > & { _id: ObjectId };
  buyer: {
    name: string;
    email: string;
    _id: ObjectId;
  };
  gallery_id: string;
  order_id: string;
  status: string;
  shipping_address: IndividualAddressTypes;
  shipping_quote: ShippingQuoteTypes;
  payment_information: PaymentStatusTypes;
  tracking_information: TrackingInformationTypes;
};

type TrackingInformationTypes = {
  tracking_id: string;
  tracking_link: string;
};
type PaymentStatusTypes = {
  status: "pending" | "completed";
  transaction_value: string;
  transaction_date: string;
  transaction_reference: string;
};

type ShippingQuoteTypes = {
  package_carrier: string;
  shipping_fees: string;
  taxes: string;
  additional_information?: string;
};

interface Image {
  bucketId: string;
  fileId: string;
}

type GalleryProfileUpdateData = {
  location?: string;
  admin?: string;
  description?: string;
};

type InputData = {
  author: string;
  date: Date;
  tag?: string;
  summary: string;
  slug: string;
  cover?: File;
  content: string;
  title: string;
  minutes: string;
};

type Input = {
  label: string;
  description: string;
  placeholder: string;
  type: string;
  name: string;
  register?: UseFormRegister<FieldValues>;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string;
  disabled?: boolean;
};

interface Image {
  bucketId: string;
  fileId: string;
}

type EditorialFormData = {
  title: string;
  summary?: string;
  slug?: string;
  minutes?: string;
  content: string;
};
