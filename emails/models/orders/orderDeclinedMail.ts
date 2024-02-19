import { sendMailVerification } from "@/emails/controller/emailController";
import OrderAcceptedEmail from "@/emails/views/order/OrderAcceptedEmail";
import OrderDeclinedEmail from "@/emails/views/order/OrderDeclinedEmail";
import OrderRequestReceivedEmail from "@/emails/views/order/OrderRequestRRecievedEmail";
import { render } from "@react-email/render";
type EmailData = {
  name: string;
  email: string;
  reason: string;
  artwork_data: any;
};
export const sendOrderDeclinedMail = async ({
  name,
  email,
  reason,
  artwork_data,
}: EmailData) => {
  await sendMailVerification({
    to: email,
    subject: "Your Order has been Declined!",
    html: render(OrderDeclinedEmail(name, reason, artwork_data), {
      pretty: true,
    }),
  });
};
