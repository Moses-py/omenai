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

const OrderAcceptedEmail = (
  name: string,
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
              Your order request has been accepted
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I hope this email finds you well. <br />
              We are thrilled to inform you that your order request for{" "}
              <Link
                href={`${url}/artwork/${artwork_data.title}`}
                className="underline text-blue-800 italic font-medium"
              >
                {artwork_data.title}
              </Link>{" "}
              has been accepted by the gallery. They have provided all the
              necessary information, including shipping quotes and applicable
              taxes, to facilitate the purchase of this exquisite artwork.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              You can now proceed with the payment for your artwork. To complete
              your purchase, please click on the following link to visit the
              artwork payment page:
            </Text>
            <div className="w-full grid place-items-center text-center">
              <Link
                className="w-fit bg-black text-white text-center px-5 cursor-pointer py-3"
                href={`${url}/dashboard/gallery/orders`}
              >
                Pay now!
              </Link>
            </div>
            <Text className="text-black text-[14px] leading-[24px]">
              If you have any questions or need further assistance regarding the
              payment process or your order, please feel free to reach out to
              us. We are here to help ensure a smooth and enjoyable experience
              for you.{" "}
              <Link
                href="mailto:contact@omenani.net"
                className="underline text-blue-800 italic"
              >
                contact@omeani.net
              </Link>
              .
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for choosing to support artists on our platform. We
              greatly appreciate your patronage and look forward to seeing this
              stunning artwork find its new home with you.
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

export default OrderAcceptedEmail;
