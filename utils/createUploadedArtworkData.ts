export function createUploadedArtworkData(
  data: ArtworkUploadStateTypes,
  url: string,
  id: string
): Omit<ArtworkSchemaTypes, "art_id" | "should_show_on_sub_active"> {
  const updatedArwordData = {
    artist: data.artist,
    dimensions: {
      height: data.height,
      width: data.width,
      depth: data.depth,
      weight: data.weight,
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
    artist_birthyear: data.artist_birthyear,
    artist_country_origin: data.artist_country_origin,
    certificate_of_authenticity: data.certificate_of_authenticity,
    artwork_description: data.artwork_description,
    framing: data.framing,
    signature: data.signature,
    carrier: data.carrier,
  };

  return updatedArwordData;
}
