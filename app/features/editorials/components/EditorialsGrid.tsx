import EditorialGridItemLarge from "./EditorialGridItemLarge";
import EditorialGridItemsList from "./EditorialGridItemsList";

export default function EditorialsGrid({
  editorials,
}: {
  editorials: any[] | undefined;
}) {
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

  const editorialSubList = sortedEditorials.slice(1, 8);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-12 ">
      <div className="md:col-span-0 lg:col-span-4">
        <EditorialGridItemLarge editorial={sortedEditorials[0]} />
      </div>

      <div className="md:col-span-2 lg:col-span-8">
        <EditorialGridItemsList editorials={editorialSubList} />
      </div>

      {/* <EditorialGridItemsList editorials={sortedEditorials.slice(5, 7)} /> */}
    </div>
  );
}
