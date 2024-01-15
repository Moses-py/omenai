import EditorialItem, { EditorialItemProps } from "./EditorialItem";

export default function EditorialGridItemLarge({
  editorial,
}: {
  editorial: EditorialItemProps;
}) {
  return (
    <div className="w-auto h-auto">
      <EditorialItem
        title={editorial.title}
        date={editorial.date}
        minutes={editorial.minutes}
        image={editorial.image}
        summary={editorial.summary}
        id={editorial.id}
      />
    </div>
  );
}
