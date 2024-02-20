import { storage } from "@/appwrite";
import { getApiUrl } from "@/config";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import { formatPrice } from "@/utils/priceFormatter";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Tailwind,
  Text,
} from "@react-email/components";

const RequestPriceEmail = (
  name: string,
  artwork_data: Pick<
    ArtworkSchemaTypes,
    "title" | "artist" | "art_id" | "pricing" | "url" | "medium"
  >
) => {
  const url = getApiUrl();
  const image = storage.getFileView(
    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
    artwork_data.url
  );
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
            <Text className="text-black text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for your interest in{" "}
              <Link
                href={`${url}/artwork/${artwork_data.title}`}
                className="underline text-blue-800 italic font-medium"
              >
                {artwork_data.title}
              </Link>{" "}
              on our platform. We have received your request for the base price
              of this artwork, and we're delighted to provide you with the
              requested information.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Here are the details of the artwork:
            </Text>

            <Img
              src={image.href}
              alt="artwork_image"
              className="mx-auto mt-10 max-w-[200px] w-auto aspect-auto max-h-[250px] h-auto"
            />

            <div className="my-0">
              <ul>
                <li>
                  <Text className="text-black text-[14px] leading-[24px]">
                    Artwork: <strong> {artwork_data.title}</strong>
                  </Text>
                </li>
                <li>
                  <Text className="text-black text-[14px] leading-[24px]">
                    Artist name: <strong>{artwork_data.artist}</strong>
                  </Text>
                </li>
                <li>
                  <Text className="text-black text-[14px] leading-[24px]">
                    Medium: <strong>{artwork_data.medium}</strong>
                  </Text>
                </li>
                <li>
                  <Text className="text-black text-[14px] leading-[24px]">
                    Base price:{" "}
                    <strong>{formatPrice(artwork_data.pricing.price)}</strong>
                  </Text>
                </li>
              </ul>
            </div>
            <div className="w-full grid place-items-center text-center">
              <Link
                className="w-fit bg-black text-white text-center px-5 cursor-pointer py-3"
                href={`${url}/purchase/${artwork_data.title}`}
              >
                Purchase this artwork
              </Link>
            </div>

            <Text className="text-black text-[14px] leading-[24px]">
              Please note that the base price provided is for the artwork itself
              and does not include any additional fees such as shipping or
              taxes.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              If you have any further questions about the artwork please don't
              hesitate to contact us. We're here to assist you in any way we
              can.{" "}
              <Link
                href="mailto:contact@omenani.net"
                className="underline text-blue-800 italic"
              >
                contact@omeani.net
              </Link>
              .
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you again for your interest in{" "}
              <Link
                href={`${url}/artwork/${artwork_data.title}`}
                className="underline text-blue-800 italic font-medium"
              >
                {artwork_data.title}
              </Link>
              . We look forward to the possibility of serving you further.
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

export default RequestPriceEmail;
