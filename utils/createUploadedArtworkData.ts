export function createUploadedArtworkData(
  data: ArtworkUploadStateTypes,
  url: string,
  id: string
): Omit<ArtworkSchemaTypes, "art_id"> {
  const updatedArwordData = {
    artist: data.artist,
    dimensions: {
      height: data.height,
      width: data.width,
      depth: data.depth,
    },
    pricing: {
      price: data.price,
      shouldShowPrice: data.shouldShowPrice,
    },
    materials: data.materials,
    medium: data.medium,
    year: data.year,
    title: data.title,
    rarity: data.rarity,
    url,
    gallery_id: id,
  };

  return updatedArwordData;
}
