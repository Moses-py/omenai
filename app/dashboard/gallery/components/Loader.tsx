import LoaderAnimation from "@/components/loader/LoaderAnimation";

export default function Loader() {
  return (
    <div className="w-full h-full grid place-items-center">
      <LoaderAnimation theme="dark" />
    </div>
  );
}
