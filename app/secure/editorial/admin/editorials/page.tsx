import React from "react";
import { blogMockData } from "../mocks/blockMockData";
import ArticleCard from "../components/ArticleCard";

export default function EditorialAdmin() {
  return (
    <div>
      <h1 className="text-base-theme text-md font-medium mx-5">
        My Editorials
      </h1>
      <>
        <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
          {blogMockData.map((data, index) => {
            return (
              <ArticleCard
                key={index}
                image={data.image}
                date={data.date}
                title={data.title}
                summary={data.summary}
                minutes={data.minutes}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}
