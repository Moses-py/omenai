import { sendMailVerification } from "@/emails/email_controller/emailController";
import UserVerificationEmail from "@/emails/email_views/individuals/verifyIndividual";
import { render } from "@react-email/render";

type EmailData = {
  name: string;
  email: string;
  redirect_uri: string;
};
export const sendMail = async ({ name, email, redirect_uri }: EmailData) => {
  await sendMailVerification({
    to: email,
    subject: "Welcome onboard to Omenai inc.",
    html: render(UserVerificationEmail(name, redirect_uri), {
      pretty: true,
    }),
  });
};
