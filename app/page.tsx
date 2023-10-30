import Link from "next/link";
import {
  Footer,
  HeroSection,
  Navbar,
  ProductsGrid,
  ProductsSlide,
} from "./features";

export default function Home() {
  return (
    <main className="w-full h-[100vh] grid place-items-center">
      <Link href={"/auth/login/individual"}>
        <button className="py-2 px-3 bg-primary text-white rounded-md font-sans">
          Login to individual account
        </button>
      </Link>
      <Link href={"/dashboard/gallery/overview"}>
        <button className="py-2 px-3 bg-primary text-white rounded-md font-sans">
          View gallery dashboard
        </button>
      </Link>

      {/* <Navbar />
      <HeroSection />

      <ProductsSlide items={artworks} title="Featured artworks" />
      <ProductsSlide items={artworks} title="Popular picks: latest" />
      <ProductsGrid items={artworksGrid} title="Latest art shows" overlay />
      <ProductsSlide items={artworks} title="Trending artists on Omenai" />
      <ProductsGrid items={editorialGrid} title="Omenai editorial picks" />

      <Footer /> */}
    </main>
  );
}

const artworks = [
  {
    image: "/images/d16e8db0973b47b32d2c713c5efee39f.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/bdb8553b6cda538d537847a97b3a44c9.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/ec9cb7320ae3fd3c7c7cf1a0477f2e32.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: null,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/905a0153674a571838496761b4371803.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/17f486286ed3d1c428f0dc92d4ab9381.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/d16e8db0973b47b32d2c713c5efee39f.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/bdb8553b6cda538d537847a97b3a44c9.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/ec9cb7320ae3fd3c7c7cf1a0477f2e32.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: null,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/905a0153674a571838496761b4371803.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
  {
    image: "/images/17f486286ed3d1c428f0dc92d4ab9381.jpeg",
    name: "Geodanna Cordedo",
    gallery: "Omenai Gallery",
    price: 2500,
    date: "Aurora Borealis, p.i 2021",
  },
];

const artworksGrid = [
  {
    name: "je t’adore",
    image: "/images/90774a4cb4cdbda115cca9c0cd1a14d0.jpeg",
    author: "Yardson Richardson Gallery",
    date: "September 9 - september 11, 2023",
  },
  {
    name: "je t’adore",
    image: "/images/5f220f68bbb17c166273277694169c3b.jpeg",
    author: "Yardson Richardson Gallery",
    date: "September 9 - september 11, 2023",
  },
  {
    name: "je t’adore",
    image: "/images/2aa8e73fe05f9973e6de1e785ac40a2f.jpeg",
    author: "Yardson Richardson Gallery",
    date: "September 9 - september 11, 2023",
  },
  {
    name: "je t’adore",
    image: "/images/aaeae666a9f8e858d633b9caa26cd7c6.jpeg",
    author: "Yardson Richardson Gallery",
    date: "September 9 - september 11, 2023",
  },
];
const editorialGrid = [
  {
    image: "/images/90774a4cb4cdbda115cca9c0cd1a14d0.jpeg",
    name: "The Canality of African culture",
    author: "Solomon Grundy",
    date: "Sept 9, 2023",
  },
  {
    image: "/images/5f220f68bbb17c166273277694169c3b.jpeg",
    name: "The Canality of African culture",
    author: "Solomon Grundy",
    date: "Sept 9, 2023",
  },
  {
    image: "/images/2aa8e73fe05f9973e6de1e785ac40a2f.jpeg",
    name: "The Canality of African culture",
    author: "Solomon Grundy",
    date: "Sept 9, 2023",
  },
  {
    image: "/images/aaeae666a9f8e858d633b9caa26cd7c6.jpeg",
    name: "The Canality of African culture",
    author: "Solomon Grundy",
    date: "Sept 9, 2023",
  },
];
