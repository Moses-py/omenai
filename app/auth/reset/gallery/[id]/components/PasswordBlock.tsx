import PasswordForm from "./PasswordForm";
type TokenProps = {
  token: string;
};
export default function PasswordBlock({ token }: TokenProps) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="info_text my-[1rem]">
        <h1 className="lg:text-2xl md:text-xl text-md">
          Update your password!
        </h1>
        <div className="flex flex-col gap-4 my-[2rem]">
          <PasswordForm id={token} />
        </div>
      </div>
    </div>
  );
}
