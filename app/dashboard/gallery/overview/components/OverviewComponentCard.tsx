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
        fullWidth ? "p-1" : "p-5"
      } rounded-lg ring-1 ring-base-theme/20 my-5 w-full`}
    >
      <h4 className="text-primary text-base sm:text-sm font-semibold mb-5">
        {title}
      </h4>
      {children}
    </div>
  );
}
