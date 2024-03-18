import { sendMailVerification } from "@/emails/controller/emailController";
import PasswordRecoveryEmail from "@/emails/views/recovery/PasswordRecoveryEmail";
import SubscriptionPaymentFailedMail from "@/emails/views/subscription/SubscriptionPaymentFailedMail";
import { render } from "@react-email/render";

type EmailData = {
  name: string;
  email: string;
};
export const sendSubscriptionPaymentFailedMail = async ({
  name,
  email,
}: EmailData) => {
  // Set up resend here instead
  await sendMailVerification({
    to: email,
    subject: " Notification: Failed Subscription Payment Attempt",
    html: render(SubscriptionPaymentFailedMail(name), {
      pretty: true,
    }),
  });
};
