import Form from "./features/form/Form";
import ImageBlock from "./features/image/Image";

export default async function IndividualLogin() {
  const ip = await fetch("https://api.ipify.org").then((res) => res.text());
  return (
    <section className="h-[100vh] w-full grid place-items-center">
      <div className="container w-full sm:w-[80%] h-full sm:h-[80%] md:flex sm:ring-1 sm:ring-secondary/20 relative rounded-xl">
        {/* Image section */}
        <ImageBlock />
        {/* Form section */}
        <Form ip={ip} />
      </div>
    </section>
  );
}
