import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties } from "react";
type Props = {
  title: string;
  items: {
    name: string;
    date: string;
    image: string;
    author: string;
  }[];
  overlay?: boolean;
};
export const ProductsGrid = (props: Props) => {
  const { items, title, overlay = false } = props;
  return (
    <div className="my-16 px-5 lg:px-10">
      <p className="text-xl font-light text-black">{title}</p>

      <div
        className={clsx(
          "grid mt-8  [grid-template-areas:_'card-1_card-1_card-2_card-3'_'card-1_card-1_card-2_card-3'_'card-1_card-1_card-4_card-4']  gap-5",
          overlay ? "h-[600px]" : ""
        )}
      >
        {items.slice(0, 4).map((item, index) => (
          <Card
            key={index}
            {...item}
            overlay={overlay}
            isSmall={index !== 0}
            isLast={index === 3}
            className={clsx(overlay ? "overflow-hidden" : "")}
            style={{ gridArea: `card-${index + 1}` }}
          />
        ))}
      </div>
    </div>
  );
};

type CardProps = Props["items"][0] & {
  className?: string;
  overlay?: boolean;
  isSmall?: boolean;
  isLast?: boolean;
  style?: CSSProperties;
};
const Card = (props: CardProps) => {
  const { image, className, overlay, isLast = false, style } = props;

  return (
    <div className={clsx("relative", className)} style={style}>
      <Image
        src={image}
        alt="image"
        width={200}
        height={200}
        className={clsx(
          "relative w-full object-cover",
          overlay ? "h-full" : isLast ? "h-[60%]" : "h-[80%]"
        )}
      />

      {overlay ? (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 flex">
          <InfoCard {...props} />
        </div>
      ) : (
        <InfoCard {...props} />
      )}
    </div>
  );
};

const InfoCard = (props: Omit<CardProps, "image" | "className" | "isLast">) => {
  const { overlay, author, date, name, isSmall } = props;

  return (
    <div className={clsx(overlay ? "mt-auto p-5" : "")}>
      <p
        className={clsx(
          "font-light",
          overlay ? "text-white" : "text-black",
          isSmall ? "text-sm" : "text-lg"
        )}
      >
        {name}
      </p>
      <p
        className={clsx(
          "font-light",
          overlay ? "text-white" : "text-black",
          isSmall ? "text-base" : "text-sm"
        )}
      >
        {author}
      </p>
      <p
        className={clsx(
          "font-light",
          overlay ? "text-white" : "text-black",
          isSmall ? "text-base" : "text-sm"
        )}
      >
        {date}
      </p>
    </div>
  );
};
