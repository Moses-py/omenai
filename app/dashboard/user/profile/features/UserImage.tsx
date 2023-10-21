import Image from "next/image";

export const UserImage = () => {
  return (
    <div className="my-5 mx-5 lg:mx-0 flex items-center flex-col justify-center">
      <Image
        src={"/images/0d18a68a68b46a499cbf5a78126d31fc.png"}
        alt="user banner"
        width={500}
        height={150}
        className="ml-5 w-full h-[150px] rounded-2xl overflow-hidden"
      />

      <div className="h-[70px] bg-gray-400 rounded-xl w-[95%] -mt-10 px-5 flex items-center justify-between">
        <div className="flex gap-3">
          <Image
            src={"/images/58c10e001b87b62387f583fc59601928.jpeg"}
            alt="user avatar"
            width={45}
            height={45}
            className="rounded-2xl overflow-hidden"
          />

          <div className="">
            <p className="text-black text-base">Johnathan Wick</p>
            <p className="text-gray-200 text-xs font-light">San fransisco</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
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
