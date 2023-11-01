import OverviewComponentCard from "../../components/OverviewComponentCard";
import PopulartArtworkCard from "./components/PopulartArtworkCard";
import { popular_artworks } from "./mocks";

export default function PopularArtworks() {
  return (
    <OverviewComponentCard fullWidth={false} title="Popular artworks">
      <div className="grid grid-cols-3 gap-5 justify-center items-center w-full">
        {popular_artworks.map((artwork, index) => {
          return (
            <PopulartArtworkCard
              key={index}
              url={artwork.url}
              title={artwork.title}
              artist={artwork.artist}
              impression_count={artwork.impression_count}
            />
          );
        })}
      </div>
    </OverviewComponentCard>
  );
}
