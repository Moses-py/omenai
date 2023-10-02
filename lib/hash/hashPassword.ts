import bcrypt from "bcrypt";
export const hashPassword = (password: string) => {
  const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  return hash;
};
