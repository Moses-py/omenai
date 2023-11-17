import { fetchHighlightData } from "@/services/overview_highlights/fetchHighlightData";
import HighlightCardIcon from "./HighlightCardIcon";
type HightlightCardProps = {
  title: string;
  icon: React.ReactNode;
  tag: string;
};
export default async function HighlightCard({
  title,
  icon,
  tag,
}: HightlightCardProps) {
  const data = await fetchHighlightData(tag);
  return (
    <div className="px-3 py-2 flex justify-between items-center rounded-lg ring-1 ring-base-theme/20 bg-white">
      <div className="flex flex-col">
        <p className="text-base-theme font-light">{title}</p>
        <h4 className="font-normal text-xs sm:text-base text-dark">{data}</h4>
      </div>
      <HighlightCardIcon icon={icon} />
    </div>
  );
}
