import FaqQuestions from "./FaqQuestions";

export default function Faq() {
  return (
    <div className="text-center grid place-items-center my-8">
      <div className="text-center sm:w-3/4 lg:w-1/2">
        <p className="text-primary">FAQ</p>
        <h1 className="text-xl font-bold text-dark">
          Frequently asked questions
        </h1>
        <p className="text-base font-light text-dark my-3">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="xl:px-[8rem] w-full p-5">
        <FaqQuestions />
      </div>
    </div>
  );
}
