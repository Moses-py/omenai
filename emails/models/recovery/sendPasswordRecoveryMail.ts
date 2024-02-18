import { sendMailVerification } from "@/emails/controller/emailController";
import PasswordRecoveryEmail from "@/emails/views/recovery/PasswordRecoveryEmail";
import { render } from "@react-email/render";

type EmailData = {
  name: string;
  email: string;
  token: string;
  gallery_name?: string;
  route: "individual" | "gallery";
};
export const sendPasswordRecoveryMail = async ({
  name,
  email,
  token,
  gallery_name,
  route,
}: EmailData) => {
  // Set up resend here instead
  await sendMailVerification({
    to: email,
    subject: "Reset your password",
    html: render(PasswordRecoveryEmail(name, token, route, gallery_name), {
      pretty: true,
    }),
  });
};
