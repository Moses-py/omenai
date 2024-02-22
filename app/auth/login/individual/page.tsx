import Form from "./features/form/Form";
import ImageBlock from "./features/image/Image";

export default async function IndividualLogin() {
  return (
    <section className="h-[100vh] w-full grid place-items-center">
      <div className=" w-full h-full md:flex sm:ring-1 sm:ring-dark/20 relative rounded-xl">
        {/* Image section */}
        <ImageBlock />
        {/* Form section */}
        <Form />
      </div>
    </section>
  );
}
