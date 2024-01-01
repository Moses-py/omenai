import EditorialItem, { EditorialItemProps } from "./EditorialItem";

export default function EditorialGridItemsList({
  editorials,
}: {
  editorials: EditorialItemProps[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {editorials.map((editorial, index) => {
        return (
          <EditorialItem
            key={index}
            title={editorial.title}
            date={editorial.date}
            minutes={editorial.minutes}
            image={editorial.image}
            summary={editorial.summary}
            id={editorial.id}
          />
        );
      })}
    </div>
  );
}
