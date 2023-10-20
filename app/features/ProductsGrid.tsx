/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";
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
          overlay ? "h-[600px]" : "h-[500px]"
        )}
      >
        {items.slice(0, 4).map((item, index) => (
          <Card
            key={index}
            {...item}
            overlay={overlay}
            isSmall={index !== 0}
            isLast={index === 3}
            className={clsx(
              `[grid-area:_card-${index + 1}]`,
              overlay ? "overflow-hidden" : ""
            )}
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
};
const Card = (props: CardProps) => {
  const {
    author,
    date,
    image,
    name,
    className,
    overlay,
    isSmall,
    isLast = false,
  } = props;

  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "relative ",
          overlay ? "h-full" : isLast ? "h-[60%]" : "h-[80%]"
        )}
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>

      {overlay ? (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 flex ">
          <InfoCard {...props} />
        </div>
      ) : (
        <InfoCard {...props} />
      )}
    </div>
  );
};

const InfoCard = (props: CardProps) => {
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
