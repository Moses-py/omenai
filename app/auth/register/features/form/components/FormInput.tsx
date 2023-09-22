import FormController from "./FormController";
import Input, { InputProps } from "./Input";

export default function FormInput() {
  let name = "email";
  return (
    <div className="container">
      <form className="flex flex-col justify-end gap-4 w-full container lg:px-[2rem] xl:px-[4rem] 2xl:px-[7rem]">
        <FormController />
      </form>
    </div>
  );
}
