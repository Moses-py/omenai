import Loader from "@/components/loader/Loader";

export default function loading() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Loader theme="dark" />
    </div>
  );
}
