import HighlightCardIcon from "./HighlightCardIcon";
type HightlightCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};
export default function HighlightCard({
  title,
  value,
  icon,
}: HightlightCardProps) {
  return (
    <div className="px-3 py-2 flex justify-between items-center rounded-lg ring-1 ring-base-theme/20 bg-white">
      <div className="flex flex-col">
        <p className="text-base-theme font-light">{title}</p>
        <h4 className="font-semibold text-xs sm:text-base text-primary">
          {value}
        </h4>
      </div>
      <HighlightCardIcon icon={icon} />
    </div>
  );
}
