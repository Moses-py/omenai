import { sendMailVerification } from "@/emails/controller/emailController";
import GalleryVerificationEmail from "@/emails/views/gallery/verifyGallery";
import UserVerificationEmail from "@/emails/views/individuals/verifyIndividual";
import { render } from "@react-email/render";

type EmailData = {
  name: string;
  email: string;
  token: string;
};
export const sendGalleryMail = async ({ name, email, token }: EmailData) => {
  // await sendMailVerification({
  //   to: email,
  //   subject: "Verify your Omenai Gallery account.",
  //   html: render(GalleryVerificationEmail(name, token), {
  //     pretty: true,
  //   }),
  // });
};
