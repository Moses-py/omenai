import HighlightCard from "./components/HighlightCard";
import { highlightCardEl } from "./mocks";

export default function Highlight() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
      {highlightCardEl.map((item, index) => {
        return (
          <HighlightCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
}
