import React from "react";

export default function PasswordUpdate() {
  return (
    <form className="flex flex-col gap-4 w-full">
      <input
        type="text"
        className="flex-1 w-full ring-1 ring-secondary/20 focus:ring-primary px-4 py-1 rounded-md placeholder:text-xs"
        placeholder="Enter new password"
      />
      <input
        type="text"
        className="flex-1 w-full ring-1 ring-secondary/20 focus:ring-primary px-4 py-1 rounded-md placeholder:text-xs"
        placeholder="Confirm password"
      />

      <button
        type="button"
        className="grid self-end place-items-center w-full sm:w-fit px-4 py-2 bg-primary hover:bg-primary/50 rounded-md text-white text-xs"
      >
        Save
      </button>
    </form>
  );
}
