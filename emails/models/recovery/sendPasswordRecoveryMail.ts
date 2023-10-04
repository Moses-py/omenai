import { sendMailVerification } from "@/emails/controller/emailController";
import PasswordRecoveryEmail from "@/emails/views/recovery/PasswordRecoveryEmail";
import { render } from "@react-email/render";

type EmailData = {
  name: string;
  email: string;
  token: string;
};
export const sendPasswordRecoveryMail = async ({
  name,
  email,
  token,
}: EmailData) => {
  await sendMailVerification({
    to: email,
    subject: "Reset your password",
    html: render(PasswordRecoveryEmail(name, token), {
      pretty: true,
    }),
  });
};
