export default function OverviewComponentCard({
  children,
  fullWidth,
  title,
}: {
  children: React.ReactNode;
  fullWidth: boolean;
  title: string;
}) {
  return (
    <div
      className={` ${
        fullWidth ? "px-1 py-2" : " p-6"
      } rounded-xl ring-1 ring-base-theme/20 mt-5 w-full`}
    >
      <h4 className="text-dark text-base md:text-sm font-normal mb-5">
        {title}
      </h4>
      {children}
    </div>
  );
}
