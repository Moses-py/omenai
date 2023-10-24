import Image from "next/image";

export default function Settings() {
  return (
    <div className="px-5 lg:px-2 pt-8 space-y-5 ">
      <div className="pt-2 pb-4 border-b border-line">
        <p className="text-base-theme font-medium text-sm">Profile</p>

        <div className="flex gap-3 items-center mt-5 cursor-pointer">
          <div className="h-[60px] w-[60px] rounded-full bg-[#eee] flex items-center justify-center">
            <Image
              src="/icons/profile.png"
              alt="icon"
              width={24}
              height={24}
              className=""
            />
          </div>
          <p className="text-base-theme px-5 lg:px-2 underline">
            Add a profile image
          </p>
        </div>
      </div>

      <div className="pt-2 pb-4 border-b border-line">
        <p className="text-base-theme font-medium text-base">Password</p>

        <button
          type="button"
          className="flex bg-primary hover:bg-primary/50 text-white rounded-full h-fit p-2 px-4 mt-5"
        >
          Change password
        </button>
      </div>

      <div className="pt-2 pb-4 border-b border-line">
        <p className="text-base-theme font-medium text-base">Account</p>

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
