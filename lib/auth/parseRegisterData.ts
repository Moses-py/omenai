import { hashPassword } from "@/lib/hash/hashPassword";

type data =
  | Omit<IndividualRegisterData, "confirmPassword">
  | Omit<GallerySignupData, "confirmPassword">;

export function parseRegisterData(data: data) {
  // Validate data before extracting password
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data");
  }
  // Extract password layer
  const { password } = data;

  let hashedPassword;
  try {
    //   Hash password with bcrypt
    hashedPassword = hashPassword(password);
  } catch (error) {
    // Handle error
    console.error("Error hashing password:", error);

    // return an appropriate response or throw a custom error
    throw new Error("Failed to hash password");
  }

  // Construct parse Data
  const parseData = { ...data, password: hashedPassword };

  //   return data
  return parseData;
}
