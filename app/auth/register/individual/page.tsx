import Form from "./features/form/Form";
import ImageBlock from "./features/image/Image";

export default function IndividualSignup() {
  return (
    <section className="h-[100vh] w-full grid place-items-center">
      <div className=" w-full h-full md:flex relative">
        {/* Form section */}
        <Form />
        {/* Image section */}
        <ImageBlock />
      </div>
    </section>
  );
}
