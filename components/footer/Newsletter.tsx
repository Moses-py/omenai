import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center p-5 justify-center gap-x-4">
      <div className="col-span-2 flex justify-center w-full">
        <Image
          src={"/newsletter.jpg"}
          alt={"Newsletter image"}
          height={200}
          width={500}
          className="w-full object-cover"
        />
      </div>

      <div className="col-span-3">
        <div className="my-8">
          <h2 className="text-md md:text-lg font-bold text-dark">
            Get the latest news!
          </h2>
          <p className="mt-4 text-dark/70">
            <span className="font-bold">Where Creativity Meets Updates:</span>{" "}
            Get the latest inside scoops on Art Trends
          </p>
        </div>
        <form className="">
          <label htmlFor="UserEmail" className="sr-only">
            {" "}
            Email{" "}
          </label>

          <div className="border border-dark/20 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
            <input
              type="email"
              id="UserEmail"
              placeholder="john@rhcp.com"
              className="w-full border-none focus:border-transparent focus:ring-transparent sm:"
            />

            <button className="mt-1 w-full bg-primary px-6 py-3  font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
