import { sendMailVerification } from "@/emails/controller/emailController";
import PasswordRecoveryEmail from "@/emails/views/recovery/PasswordRecoveryEmail";
import SubscriptionPaymentFailedMail from "@/emails/views/subscription/SubscriptionPaymentFailedMail";
import SubscriptionPaymentSuccessfulMail from "@/emails/views/subscription/SubscriptionPaymentSuccessfulMail";
import { render } from "@react-email/render";

type EmailData = {
  name: string;
  email: string;
};
export const sendSubscriptionPaymentSuccessfulMail = async ({
  name,
  email,
}: EmailData) => {
  // Set up resend here instead
  await sendMailVerification({
    to: email,
    subject: "Confirmation: Successful Subscription Payment",
    html: render(SubscriptionPaymentSuccessfulMail(name), {
      pretty: true,
    }),
  });
};
