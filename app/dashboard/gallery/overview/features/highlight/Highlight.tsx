import HighlightCard from "./components/HighlightCard";
import { highlightCardEl } from "./mocks";
import HighlightCardIcon from "./components/HighlightCardIcon";

export default function Highlight() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
      {highlightCardEl.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="px-3 py-2 flex justify-between items-center rounded-lg ring-1 ring-dark/20 bg-white"
            >
              <div className="flex flex-col">
                <p className="text-dark font-normal">{item.title}</p>
                <HighlightCard
                  title={item.title}
                  icon={item.icon}
                  tag={item.tag}
                />
              </div>
              <HighlightCardIcon icon={item.icon} />
            </div>
          </>
        );
      })}
    </div>
  );
}
