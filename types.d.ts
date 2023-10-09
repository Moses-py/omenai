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
