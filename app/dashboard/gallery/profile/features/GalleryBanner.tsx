import Image from "next/image";

export const UserBanner = () => {
  return (
    <div className="my-5 mx-5 lg:mx-0 flex items-center flex-col justify-center">
      <Image
        src={"/images/1.jpg"}
        alt="user banner"
        width={6000}
        height={4000}
        className="w-full h-[200px] object-fill object-center rounded-2xl overflow-hidden"
      />

      <div className="py-[1.5rem] bg-gray-400 rounded-xl w-[95%] -mt-10 xs:px-5 flex  xs:flex-row flex-col items-center justify-between">
        <div className="flex gap-3">
          <Image
            src={"/images/5.jpeg"}
            alt="user avatar"
            width={45}
            height={45}
            className="rounded-2xl overflow-hidden"
          />

          <div className="">
            <p className="text-base-theme font-normal text-base">
              Louvre d&apos;museum
            </p>
            <p className="text-base-theme text-xs font-light">San fransisco</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-[1rem] xs:mt-0">
          <Image
            src="/icons/status.png"
            alt="icon"
            width={24}
            height={24}
            className=""
          />

          <p className="">
            Status: <span className="text-red-500">Incomplete</span>
          </p>
        </div>
      </div>
    </div>
  );
};
