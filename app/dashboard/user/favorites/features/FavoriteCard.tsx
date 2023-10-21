import Image from "next/image";
import { IoHeart } from "react-icons/io5";

type Props = {
  image: string;
  name: string;
  author: string;
  gallery: string;
  price: string | null;
};
export const FavoriteCard = (props: Props) => {
  const { author, gallery, image, price, name } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <Image
          src={image}
          alt=""
          width={100}
          height={120}
          className="h-[120px] object-cover"
        />

        <div className="ml-4">
          <p className="text-primary text-sm font-semibold">{name}</p>
          <p className="text-base text-gray-200">{author}</p>
          <p className="text-base text-[#B5B5B5]">{gallery}</p>

          <div className="flex items-center justify-between w-[250px]">
            {price ? (
              <p className="text-[#696969] font-medium text-base">${price}</p>
            ) : (
              <p className="text-[#696969] font-medium text-base underline">
                Price on request
              </p>
            )}

            <IoHeart className="h-6 w-6 text-red-500" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {price ? (
          <button
            type="button"
            className="hidden md:flex bg-primary hover:bg-primary/50 text-white rounded-full h-fit p-2 px-4"
          >
            <Image
              src={"/icons/cart.png"}
              alt="cart icon"
              width={24}
              height={24}
              className="mr-2 shrink-0"
            />
            Purchase
          </button>
        ) : (
          <button
            type="button"
            className="hidden md:flex bg-primary hover:bg-primary/50 text-white rounded-full h-fit p-2 px-4"
          >
            Request price
          </button>
        )}
        <button
          type="button"
          className="hidden md:flex bg-red-500 hover:bg-red-500/50 text-white rounded-full h-fit p-2 px-4"
        >
          <Image
            src={"/icons/delete.png"}
            alt="delete icon"
            width={24}
            height={24}
            className="mr-2 shrink-0"
          />
          Purchase
        </button>
      </div>
    </div>
  );
};
