import { ArtworkImage } from "@/components/artworks/ArtworkImage";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { fetchUserSaveArtworks } from "@/services/artworks/fetchUserSavedArtworks";
import { getServerSession } from "next-auth";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export default async function Saves() {
  const artworks = await fetchUserSaveArtworks();
  const session = await getServerSession(nextAuthOptions);

  return (
    <div className="p-4">
      {artworks.data.length === 0 ? (
        <div className="w-full h-[50vh] grid place-items-center">
          <p>Like an artwork to add it here.</p>
        </div>
      ) : (
        <div className="2xl:columns-5 xl:columns-4 md:columns-3 xs:columns-2 columns-1 gap-y-6">
          {artworks.data.map((art: ArtworkResultTypes, index: number) => {
            return (
              <div key={index}>
                <ArtworkImage
                  key={index}
                  url={art.url}
                  title={art.title}
                  author={art.artist}
                  art_id={art.art_id}
                  pricing={art.pricing}
                  impressions={art.impressions as number}
                  likeIds={art.like_IDs as string[]}
                  sessionId={
                    session?.user.role === "user" ? session?.user.id : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
