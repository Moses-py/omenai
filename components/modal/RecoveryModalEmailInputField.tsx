import React from "react";

export default function RecoveryModalEmailInputField() {
  return (
    <form className="flex sm:flex-row flex-col gap-4 w-full">
      <input
        type="text"
        className="flex-1 w-full ring-1 ring-secondary/20 focus:ring-primary px-4 py-1 rounded-md placeholder:text-xs"
        placeholder="Email address"
        required
      />
      <button
        type="submit"
        className="grid self-end disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center w-full sm:w-fit px-4 py-2 bg-primary hover:bg-primary/50 rounded-md text-white text-xs"
      >
        Send link
      </button>
    </form>
  );
}
