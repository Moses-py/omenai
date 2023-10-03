import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const GalleryVerificationEmail = (galleryName: string, token: string) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome on board to <strong>Omenai for Galleries.</strong>
            </Heading>
            {/* <Text className="text-black text-[14px] leading-[24px]"></Text> */}
            <Text className="text-black text-[14px] leading-[24px]">
              We, at <strong>Omenai Inc.</strong>, are thrilled to have you on
              board and eagerly await the beginning of your journey with us
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Your email verification token is located below. Enter this code
              into the designated input field on the verification page. Please
              be aware that the viability of this token will expire in{" "}
              <strong>10 minutes.</strong>
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Text className="text-black text-[14px] font-bold leading-[24px]">
                <strong>{token}</strong>
              </Text>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-secondary text-[12px] leading-[24px]">
              Please be advised that the information contained within this email
              is addressed directly to{" "}
              <span className="text-black">{galleryName} Gallery </span>. In the
              event that you were not anticipating the receipt of this email, we
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

export default GalleryVerificationEmail;
