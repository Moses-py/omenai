import { sendMailVerification } from "@/emails/controller/emailController";
import RequestPriceEmail from "@/emails/views/order/RequestPriceEmail";
import { render } from "@react-email/render";
type EmailData = {
  name: string;
  email: string;
  artwork_data: Pick<
    ArtworkSchemaTypes,
    "title" | "artist" | "art_id" | "pricing" | "url" | "medium"
  >;
};
export const sendPriceEmail = async ({
  name,
  email,
  artwork_data,
}: EmailData) => {
  await sendMailVerification({
    to: email,
    subject: `Requested Information: Base Price of artwork`,
    html: render(RequestPriceEmail(name, artwork_data), {
      pretty: true,
    }),
  });
};
