import Image from "next/image";

type EditorialRecommendationSlideProps = {
  url: string;
  title: string;
  author: string;
  date: string;
  category: string;
};
export default function EditorialRecommendationSlide({
  url,
  title,
  author,
  date,
  category,
}: EditorialRecommendationSlideProps) {
  return (
    <div className="w-full h-full relative flex items-end px-5 py-4 rounded-xl">
      <Image
        src={url}
        alt="title"
        width={400}
        height={400}
        className="absolute w-full h-full object-cover inset-0 object-top rounded-xl"
      />
      <div className="bg-black/30 absolute inset-0 z-10 rounded-xl" />
      <div className="self-end text-white flex flex-col gap-y-1 relative z-20">
        <span className="text-base  font-light">{category}</span>
        <h4 className="text-base md:text-sm xl:text-md font-normal">{title}</h4>
        <p className="text-xs md:text-base font-light">{author}</p>
        <p className="text-xs md:text-base font-light">{date}</p>
      </div>
    </div>
  );
}
