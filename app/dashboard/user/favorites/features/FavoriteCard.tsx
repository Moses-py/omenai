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
    <div className="">
      <div className="">
        <Image src={image} alt="icon" width={120} height={150} className="" />

        <div className="">
          <p className="text-primary text-base">{name}</p>
          <p className="text-xs text-gray-200">{author}</p>
          <p className="text-xs text-[#B5B5B5]">{gallery}</p>

          <div className="flex items-center justify-between">
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
      <div className=""></div>
    </div>
  );
};
