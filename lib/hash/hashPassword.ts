import bcrypt from "bcrypt";
export const hashPassword = async (password: string) => {
  const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  return hash;
};
