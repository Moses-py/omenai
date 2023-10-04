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

type IndividualRegisterData = IndividualSignupData & {
  preferences: string[];
};

type AccountIndividual = {
  name: string;
  email: string;
  password: string;
  user_id: string;
  preferences: string[];
  verified: boolean;
  role: string;
};

type AccountGallery = {
  name: string;
  location: string;
  description: string;
  admin: string;
  email: string;
  password: string;
  email_verified: boolean;
  gallery_verified: boolean;
  role: string;
  gallery_id: string;
};
