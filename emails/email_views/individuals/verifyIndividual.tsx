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
import { Img } from "@react-email/img";

const UserVerificationEmail = (username: string, email_link: string) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            {/* <Container className="w-full flex justify-center">
              <Img
                src="http://localhost:3000/public/omenai_logo.png"
                alt="Omenai logo"
                width="200"
                height="60"
              />
            </Container> */}

            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome on board to <strong>Omenai</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We, at <strong>Omenai Inc.</strong>, are thrilled to have you on
              board and eagerly await the beginning of your journey with us
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              To proceed, kindly confirm your email address by using the
              link/button below. Please be advised that this link will become
              inactive in <strong>10 minutes.</strong>
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-black rounded text-white text-[12px] font-semibold no-underline text-center"
                href={email_link}
              >
                Confirm your email
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={email_link} className="text-blue-600 no-underline">
                {email_link}
              </Link>
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

export default UserVerificationEmail;
