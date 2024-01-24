export default function Newsletter() {
  return (
    <div className="w-full h-[500px] flex items-center p-5 justify-center gap-x-4">
      <iframe
        src="https://omenai.substack.com/embed"
        style={{ border: "1px solid #EEE", background: "white" }}
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
