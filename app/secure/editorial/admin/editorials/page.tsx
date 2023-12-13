import ArticleCard from "../components/ArticleCard";
import { listEditorials } from "../lib/getAllBlogArticles";

export default async function EditorialAdmin() {
  const editorials = await listEditorials();
  return (
    <div>
      <h1 className="text-base-theme text-md font-medium mx-5">
        My Editorials
      </h1>
      <>
        <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
          {editorials!.map((data, index) => {
            return (
              <ArticleCard
                key={data.id}
                image={data.image?.href}
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
