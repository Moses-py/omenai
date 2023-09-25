import Form from "./features/form/Form";
import ImageBlock from "./features/image/Image";

export default function IndividualSignup() {
  return (
    <section className="h-[100vh] w-full grid place-items-center">
      <div className="container w-full sm:w-[80%] h-full sm:h-[70%] md:flex sm:ring-1 sm:ring-secondary/20 relative rounded-xl">
        {/* Form section */}
        <Form />
        {/* Image section */}
        <ImageBlock />
      </div>
    </section>
  );
}
