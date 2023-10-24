import Image from "next/image";
import { FavoriteCard } from "./features";

export default function Favorites() {
  if (items.length === 0)
    return (
      <div className="grid place-items-center py-16 px-5">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/wish.png"
            alt="auction icon"
            width={100}
            height={100}
          />
          <p className="text-lg text-base-theme font-light">
            Favorites tab is empty. Like some artworks to save them here
          </p>
        </div>
      </div>
    );
  return (
    <div className="space-y-5 py-5 px-5">
      {items.map((item, index) => (
        <FavoriteCard key={index} {...item} />
      ))}
    </div>
  );
}

const items = [
  {
    image: "/images/17f486286ed3d1c428f0dc92d4ab9381.jpeg",
    name: "Aurora borealis, p.i 2021",
    author: "Leornado da vinci",
    gallery: "Louvre museum",
    price: "2200.89",
  },
  {
    image: "/images/905a0153674a571838496761b4371803.jpeg",
    name: "Captivating Serenity, 1998",
    author: "Alfredo di Stefano",
    gallery: "Louvre d’france",
    price: null,
  },
  {
    image: "/images/d16e8db0973b47b32d2c713c5efee39f.jpeg",
    name: "Resplendent Solitude",
    author: "Michal D’ Angelo",
    gallery: "Omenai Gallery",
    price: "1200.47",
  },
];
