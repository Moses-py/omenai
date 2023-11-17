import { Suspense } from "react";
import Loader from "../popular_artworks/Loader";
import HighlightCard from "./components/HighlightCard";
import { highlightCardEl } from "./mocks";

export default function Highlight() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
      {highlightCardEl.map((item, index) => {
        return (
          <Suspense fallback={<Loader />} key={index}>
            <HighlightCard title={item.title} icon={item.icon} tag={item.tag} />
          </Suspense>
        );
      })}
    </div>
  );
}
