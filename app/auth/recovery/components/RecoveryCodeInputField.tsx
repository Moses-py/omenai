// import React from "react";

// type RecoveryCodeInputFieldType = {
//   onClick?: () => void;
// };
// export default function RecoveryCodeInputField({
//   onClick,
// }: RecoveryCodeInputFieldType) {
//   return (
// <form className="flex flex-col gap-4 w-full">
//   <input
//     type="text"
//     className="flex-1 w-full ring-1 ring-secondary/20 focus:ring-primary px-4 py-1 rounded-md placeholder:text-xs"
//     placeholder="Enter verification code"
//   />
//   <button
//     type="button"
//     className="grid place-items-center w-full sm:w-fit px-4 py-2 self-end bg-primary hover:bg-primary/50 rounded-md text-white text-xs"
//     onClick={onClick}
//   >
//     Verify code
//   </button>
// </form>
//   );
// }
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function RecoveryCodeInputField() {
  const [otpVal, setOtp] = useState("");

  const handleOtpInputChange = (otp: React.SetStateAction<string>) => {
    setOtp(otp);
  };

  return (
    <form className="flex flex-col gap-4">
      <OtpInput
        value={otpVal}
        onChange={(otp) => handleOtpInputChange(otp)}
        numInputs={6}
        renderSeparator={<span className="text-primary">-</span>}
        inputStyle="px-5 py-2 border-1 border-primary mx-2 ring-1 w-fit rounded-md text-black"
        renderInput={(props) => (
          <input className="px-5 py-2 border-1 border-primary mx-2 ring-1 w-fit rounded-md text-black" />
        )}
      />
      <button
        type="button"
        className="grid place-items-center w-full sm:w-fit px-4 py-2 self-end bg-primary hover:bg-primary/50 rounded-md text-white text-xs"
        // onClick={onClick}
      >
        Verify code
      </button>
    </form>
  );
}
