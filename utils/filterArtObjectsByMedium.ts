export default function filterArtObjectsByMedium(
  artObjects: any[],
  keywordsToFilter: any[]
): any[] {
  return artObjects.filter((artObject) => {
    const medium = artObject.medium.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    return keywordsToFilter.some((keyword) =>
      medium.includes(keyword.toLowerCase())
    );
  });
}
