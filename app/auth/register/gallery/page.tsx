import Form from "../features/form/Form";
import ImageBlock from "../features/image/Image";

export default function page() {
  return (
    <section className="h-[100vh] w-full">
      <div className="h-full flex w-full">
        {/* Form section */}
        <Form />
        {/* Image section */}
        <ImageBlock />
      </div>
    </section>
  );
}
