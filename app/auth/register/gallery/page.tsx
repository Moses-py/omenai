import FormBlock from "./features/form/FormBlock";
import ImageBlock from "./features/image/Image";

export default function GallerySignup() {
  return (
    <section className="h-[100vh] w-full">
      <div className="h-full md:flex w-full">
        {/* Form section */}
        <FormBlock />
        {/* Image section */}
        <ImageBlock />
      </div>
    </section>
  );
}
