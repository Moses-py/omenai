import Image from "next/image";

type Props = {
  image: string;
  name: string;
  author: string;
  gallery: string;
  price: string | null;
};
export const FavoriteCard = (props: Props) => {
  const { author, image, price, name } = props;
  return (
    <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-y-[2rem] lg:gap-0 my-3">
      <div className="flex gap-x-4 w-auto">
        <Image
          src={image}
          alt=""
          width={100}
          height={120}
          className="object-cover object-top"
        />

        <div className="">
          <p className="text-dark text-base sm:text-sm font-normal">{name}</p>
          <p className="text-base text-base-theme">{author}</p>
          {/* <p className="text-base text-[#B5B5B5]">{gallery}</p> */}

          <div className="flex items-center justify-between w-[250px]">
            {price ? (
              <p className="text-[#696969] font-normal text-base">${price}</p>
            ) : (
              <p className="text-[#696969] font-normal text-base underline">
                Price on request
              </p>
            )}

            {/* <IoHeart className="h-6 w-6 text-red-500" /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col self-end gap-5 ">
        {price ? (
          <button
            type="button"
            className="flex bg-primary hover:bg-primary/50 text-white rounded-full py-2 p-2 px-4"
          >
            <Image
              src={"/icons/cart.png"}
              alt="cart icon"
              width={20}
              height={20}
              className="mr-2 shrink-0"
            />
            Purchase
          </button>
        ) : (
          <button
            type="button"
            className="flex bg-primary hover:bg-primary/50 text-white rounded-full py-2 p-2 px-4"
          >
            Request price
          </button>
        )}
        <button
          type="button"
          className="flex bg-red-500 hover:bg-red-500/50 text-white rounded-full py-2 p-2 px-4"
        >
          <Image
            src={"/icons/delete.png"}
            alt="delete icon"
            width={20}
            height={20}
            className="mr-2 shrink-0"
          />
          Delete
        </button>
      </div>
    </div>
  );
};
