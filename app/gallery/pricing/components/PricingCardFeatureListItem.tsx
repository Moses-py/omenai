import { AiOutlineCheckCircle } from "react-icons/ai";
type PricingCardFeatureListItemProps = {
  feature_title: string;
};
export default function PricingCardFeatureListItem({
  feature_title,
}: PricingCardFeatureListItemProps) {
  return (
    <div className="flex gap-2">
      <AiOutlineCheckCircle className="text-primary text-sm" />
      {feature_title}
    </div>
  );
}
