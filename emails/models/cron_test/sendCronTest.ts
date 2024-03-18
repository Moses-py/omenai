import { sendMailVerification } from "@/emails/controller/emailController";
import CronTest from "@/emails/views/cron_test/CronTest";
import { render } from "@react-email/render";

export const sendCronTest = async () => {
  // Set up resend here instead
  await sendMailVerification({
    to: "moses@omenai.net",
    subject: " Notification: Cron Test Attempt",
    html: render(CronTest(), {
      pretty: true,
    }),
  });
};
