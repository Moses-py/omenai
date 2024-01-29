import { signIn, getSession, signOut } from "next-auth/react";

export const handleSignIn = async (form: {
  email: string;
  password: string;
}) => {
  const res = await signIn("individual-login", {
    redirect: false,
    ...form,
  }).then(async ({ ok, error }: any) => {
    if (ok) {
      const session = await getSession();
      if (session?.user) {
        if (session?.user.verified)
          return { isOk: true, message: "Login successful" };
        else {
          await signOut({
            callbackUrl: `/verify/individual/${session?.user.id}`,
          });
          return { isOk: false, message: "Please verify your account" };
        }
      }
    } else {
      return { isOk: false, message: error };
    }
  });

  return res;
};
