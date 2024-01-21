"use client";
import { useEffect, useState } from "react";
import EditorialArticleCard from "./EditorialArticleCard";
import NotFoundData from "@/components/notFound/NotFoundData";
import { IoIosArrowUp } from "react-icons/io";

export default function EditorialsWrapper({
  editorials,
}: {
  editorials: any[];
}) {
  const [pageCount, setPageCount] = useState(5);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    return window.removeEventListener("scroll", () => {});
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePageCount = () => {
    if (pageCount >= editorials.length) {
      return;
    } else {
      setPageCount((prev) => prev + 5);
    }
  };
  return (
    <div className="p-5 relative">
      <h1 className="text-dark/80 text-sm md:text-md lg:text-lg font-medium">
        Editorial articles
      </h1>
      <>
        {editorials?.length === 0 ? (
          <div className="w-full h-[calc(100vh-12rem)] grid place-items-center">
            <NotFoundData />
          </div>
        ) : (
          <div className="flex flex-col mt-[2rem]">
            {editorials!.slice(0, pageCount).map((data: any, index: any) => {
              return (
                <EditorialArticleCard
                  key={index}
                  title={data.title}
                  date={data.date}
                  author={data.author}
                  url={data.url}
                  id={data.id}
                />
              );
            })}
          </div>
        )}
      </>
      <div className="flex justify-center my-8">
        {pageCount <= editorials.length ? (
          <button
            onClick={handlePageCount}
            className="bg-dark text-white px-5 py-4 rounded-full hover:bg-white hover:text-dark hover:border hover:border-dark duration-300"
          >
            Show more
          </button>
        ) : (
          <p className="font-medium text-base">That&apos;s all for now...</p>
        )}
      </div>
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed right-4 bottom-4 z-10 bg-dark text-white border p-4 rounded-full border-dark/50"
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
}
