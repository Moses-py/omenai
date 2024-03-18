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

const SubscriptionPaymentFailedMail = (name: string) => {
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
              REACTIVATE YOUR SUBSCRIPTION
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I hope this email finds you well. <br />
              We are writing to inform you about a recent attempt to process the
              payment for your subscription, which unfortunately failed to
              complete successfully.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We understand the importance of the services provided by our
              subscription, and we want to ensure that you continue to benefit
              from them without interruption.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              To reactivate your subscription and regain access to our services,
              we kindly request that you take a moment to update your payment
              information.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Please note that your subscription will remain suspended until
              your payment information is updated successfully. However, we want
              to assure you that your account and data are safe and secure
              during this time.
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              If you encounter any difficulties or have any questions regarding
              the payment process or your subscription status, please do not
              hesitate to reach out to our customer support team at{" "}
              <Link
                href="mailto:contact@omenani.net"
                className="underline text-blue-800 italic"
              >
                contact@omeani.net
              </Link>
              . We are here to assist you every step of the way.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for your prompt attention to this matter. We appreciate
              your continued support and look forward to welcoming you back as
              an active subscriber soon.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Best regards, <br />
              Moses from Omenai
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-dark text-[12px] leading-[24px]">
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

export default SubscriptionPaymentFailedMail;
