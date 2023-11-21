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
};

type ArtworkDimensions = {
  width: string;
  height: string;
  depth?: string;
};

type ArtworkPricing = {
  price: string;
  shouldShowPrice: string;
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
  price: string;
  shouldShowPrice: string;
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
