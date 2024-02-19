import { getApiUrl } from "@/config";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const OrderRequestReceivedEmail = (
  username: string,
  artwork_data: Pick<
    ArtworkSchemaTypes,
    "title" | "artist" | "art_id" | "pricing" | "url"
  >
) => {
  const url = getApiUrl();
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Img
              src={
                "https://cloud.appwrite.io/v1/storage/buckets/655c43e6901e0f772192/files/omenai_logo/view?project=655231c3469bf1ef8d8f"
              }
              width="120"
              height="20"
              alt="Omenai logo"
              className="mx-auto my-10"
            />

            <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[20px] mx-0">
              Order request received
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello <strong>{username}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I hope this email finds you well. <br />
              Thank you for expressing your interest in purchasing the{" "}
              <Link
                href={`${url}/artwork/${artwork_data.title}`}
                className="underline text-blue-800 italic font-medium"
              >
                {artwork_data.title}
              </Link>{" "}
              artwork from our store.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I am writing to confirm that we have received your order request.
              Our team is currently in the process of calculating the applicable
              shipping fees and taxes to your location. We aim to provide you
              with an accurate quote within the next 24 to 48 hours.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Once we have finalized the details, we will promptly reach out to
              you with the quote and outline the next steps to proceed with your
              order.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Should you have any questions or require further assistance in the
              meantime, please do not hesitate to contact us at{" "}
              <Link
                href="mailto:contact@omenani.net"
                className="underline text-blue-800 italic"
              >
                contact@omeani.net
              </Link>
              .
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for choosing Omenai. We look forward to serving you.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Best regards, <br />
              Moses from Omenai
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-secondary text-[12px] leading-[24px]">
              Please be advised that the information contained within this email
              was directed exclusively to{" "}
              <span className="text-black">{username} </span>. In the event that
              you were not anticipating the receipt of this email, we
              respectfully request that you refrain from taking any action based
              on its contents. This communication may contain confidential and
              legally privileged information, and it is intended solely for the
              designated recipient. Unauthorized access, use, or dissemination
              of this email is strictly prohibited. If you have received this
              email in error, we kindly ask that you promptly inform us and
              delete it from your communication systems. Your prompt attention
              to this matter is greatly appreciated. Thank you
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OrderRequestReceivedEmail;
