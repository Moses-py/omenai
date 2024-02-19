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
  Tailwind,
  Text,
} from "@react-email/components";

const OrderDeclinedEmail = (
  name: string,
  reason: string,
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
              className="mx-auto mt-10"
            />

            <Heading className="text-black text-[20px] font-normal text-center p-0 mb-[40px] mx-0">
              Unfortunately, your order request has been declined
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I hope this email finds you well. <br />
              We regret to inform you that the order request for{" "}
              <Link
                href={`${url}/artwork/${artwork_data.title}`}
                className="underline text-blue-800 italic font-medium"
              >
                {artwork_data.title}
              </Link>{" "}
              has been declined by the gallery. After careful consideration,
              they have decided not to proceed with the sale of this artwork at
              this time.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>
                Reason: <span className="italic">{reason}</span>
              </strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We understand that this may come as disappointing news, and we
              sincerely apologize for any inconvenience this may cause you. We
              encourage you to{" "}
              <Link
                href={`${url}/catalog`}
                className="underline text-blue-800 italic font-medium"
              >
                explore
              </Link>{" "}
              other artworks available on our platform, as we have a diverse
              selection of pieces from talented artists.{" "}
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              If you have any questions or require further assistance, please
              don't hesitate to reach out to us. Our team is here to support you
              and help you find the perfect artwork for your collection.{" "}
              <Link
                href="mailto:contact@omenani.net"
                className="underline text-blue-800 italic"
              >
                contact@omeani.net
              </Link>
              .
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for your understanding and continued support of our
              platform
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Best regards, <br />
              Moses from Omenai
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-secondary text-[12px] leading-[24px]">
              Please be advised that the information contained within this email
              was directed exclusively to{" "}
              <span className="text-black">{name} </span>. In the event that you
              were not anticipating the receipt of this email, we respectfully
              request that you refrain from taking any action based on its
              contents. This communication may contain confidential and legally
              privileged information, and it is intended solely for the
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

export default OrderDeclinedEmail;
