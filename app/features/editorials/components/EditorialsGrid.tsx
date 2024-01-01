import { listEditorials } from "@/app/secure/editorial/admin/lib/getAllBlogArticles";
import EditorialGridItemLarge from "./EditorialGridItemLarge";
import EditorialGridItemsList from "./EditorialGridItemsList";

export default async function EditorialsGrid() {
  const editorials = await listEditorials();
  const sortedEditorials = editorials!.reverse().map((editorial) => {
    const sortedEditorial = {
      title: editorial.title,
      summary: editorial.summary,
      image: editorial.image.href,
      id: editorial.id,
      minutes: editorial.minutes,
      date: editorial.date,
    };
    return sortedEditorial;
  });

  const editorialSubList = sortedEditorials.slice(1, 5);
  return (
    <div className="grid md:grid-cols-2">
      <EditorialGridItemLarge editorial={sortedEditorials[0]} />
      <EditorialGridItemsList editorials={editorialSubList} />
    </div>
  );
}
