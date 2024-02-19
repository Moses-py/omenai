import { sendMailVerification } from "@/emails/controller/emailController";
import OrderAcceptedEmail from "@/emails/views/order/OrderAcceptedEmail";
import OrderRequestReceivedEmail from "@/emails/views/order/OrderRequestRRecievedEmail";
import { render } from "@react-email/render";
type EmailData = {
  name: string;
  email: string;
  artwork_data: any;
};
export const sendOrderAcceptedMail = async ({
  name,
  email,
  artwork_data,
}: EmailData) => {
  await sendMailVerification({
    to: email,
    subject: "Your Order has been Accepted!",
    html: render(OrderAcceptedEmail(name, artwork_data), {
      pretty: true,
    }),
  });
};
