import NotFoundData from "@/components/notFound/NotFoundData";
import ArticleCard from "../../../components/ArticleCard";
import { listEditorials } from "../lib/getAllBlogArticles";

export default async function EditorialAdmin() {
  const editorials = await listEditorials();
  return (
    <div>
      <h1 className="text-dark text-sm font-medium mx-5">My Editorials</h1>
      <>
        {editorials?.length === 0 ? (
          <div className="w-full h-[calc(100vh-12rem)] grid place-items-center">
            <NotFoundData />
          </div>
        ) : (
          <div className=" w-full grid  lg:grid-cols-3 2xl:grid-cols-4 gap-[1rem]">
            {editorials!.map((data, index) => {
              return (
                <ArticleCard
                  key={data.id}
                  image={data.image}
                  date={data.date}
                  title={data.title}
                  summary={data.summary}
                  minutes={data.minutes}
                  id={data.id}
                  views={data.views}
                />
              );
            })}
          </div>
        )}
      </>
    </div>
  );
}
