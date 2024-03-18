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

const CronTest = () => {
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
              CRON TEST
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello Moses
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              This cron ran successfully.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CronTest;
