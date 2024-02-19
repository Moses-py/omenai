import { sendMailVerification } from "@/emails/controller/emailController";
import OrderRequestReceivedEmail from "@/emails/views/order/OrderRequestRRecievedEmail";
import { render } from "@react-email/render";
type EmailData = {
  name: string;
  email: string;
  artwork_data: any;
};
export const sendOrderRequestReceivedMail = async ({
  name,
  email,
  artwork_data,
}: EmailData) => {
  await sendMailVerification({
    to: email,
    subject: "Acknowledgement of order request",
    html: render(OrderRequestReceivedEmail(name, artwork_data), {
      pretty: true,
    }),
  });
};
