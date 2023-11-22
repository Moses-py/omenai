import Image from "next/image";

export default function Settings() {
  return (
    <div className="px-5 lg:px-2 pt-8 space-y-5 ">
      <div className="pt-2 pb-4 border-b border-line">
        <p className="text-base-theme font-normal text-sm">Profile</p>
      </div>

      <div className="pt-2 pb-4 border-b border-line">
        <p className="text-base-theme font-normal text-base">Password</p>

        <button
          type="button"
          className="flex bg-primary hover:bg-primary/50 text-white rounded-full h-fit p-2 px-4 mt-5"
        >
          Change password
        </button>
      </div>

      <div className="pt-2 pb-4 border-b border-line">
        <p className="text-base-theme font-normal text-base">Account</p>

        <button
          type="button"
          className="flex bg-red-500 hover:bg-red-500/50 text-white rounded-full h-fit p-2 px-4 mt-5"
        >
          Delete my account
        </button>
      </div>
    </div>
  );
}
