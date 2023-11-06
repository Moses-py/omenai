"use client";

import { validate } from "@/lib/validations/validatorGroup";
import { resetPassword } from "@/services/password/resetPassword";
import { resetStore } from "@/store/auth/reset/resetStore";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
type IdProps = {
  id: string;
};
export default function PasswordForm({ id }: IdProps) {
  const [isLoading, setIsLoading, passwordData, updatePassword] = resetStore(
    (state) => [
      state.isLoading,
      state.setIsloading,
      state.passwordData,
      state.updatePassword,
    ]
  );

  const [errorList, setErrorList] = useState<string[]>([]);

  const router = useRouter();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const label = e.target.name;
    const value = e.target.value;

    updatePassword(label, value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading();

    setErrorList([]);
    const { success, errors }: { success: boolean; errors: string[] | [] } =
      validate(passwordData.password, "password");

    if (!success) {
      setErrorList(errors);
      setIsLoading();
    } else {
      if (passwordData.password !== passwordData.confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading();
      } else {
        const response = await resetPassword("individual", {
          password: passwordData.password,
          id,
        });

        if (!response.isOk) toast.error(response.body.message);
        else {
          toast.success(response.body.message);
          router.replace("/auth/login/individual");
        }
        setIsLoading();
      }
    }
  }
  return (
    <div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="self-start font-normal" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter a new password"
            onChange={handleInputChange}
            required
            className="ring-1 ring-black focus:ring-primary ease-linear duration-150 transition-all px-3 py-2 rounded-sm text-xs italic placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="self-start font-normal" htmlFor="confirmpassword">
            Confirm password
          </label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            required
            onChange={handleInputChange}
            className="ring-1 ring-black focus:ring-primary ease-linear duration-150 transition-all px-3 py-2 rounded-sm text-xs italic placeholder:text-gray-400"
          />

          {errorList.length > 0 &&
            errorList.map((error, index) => {
              return (
                <p key={index} className="text-red-600 text-xs">
                  {error}
                </p>
              );
            })}
        </div>

        <div className="self-end">
          <button
            disabled={isLoading}
            className="grid disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center rounded-md bg-black px-4 py-2 text-white hover:bg-black/90"
          >
            {isLoading ? <ClipLoader size={20} color="#fff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
