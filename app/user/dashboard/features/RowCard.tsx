/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";

type RowCardProps = {
  image: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};
export const RowCard = (props: RowCardProps) => {
  const { label, isActive, onClick, image } = props;
  return (
    <div
      className={clsx(
        "flex items-center h-[50px] rounded-r-full cursor-pointer transition-all duration-300 group",
        isActive ? "bg-[#F6F6F6]" : "hover:bg-[#F6F6F6]"
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          "h-full w-[5px] rounded-lg",
          isActive ? "bg-primary" : "group-hover:bg-primary"
        )}
      ></div>
      <img src={image} alt="" className="ml-5 h-6 w-6 shrink-0 " />

      <p className="pl-3 text-[#454545]">{label}</p>
    </div>
  );
};
