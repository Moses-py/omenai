import { getImage } from "./getImageData";

export const getEditorialData = async (rawEditorialData: {
  documents: any[];
}) => {
  const filtered_editorial_data = rawEditorialData?.documents.map((docs) => {
    if (docs.cover) {
      const { bucketId, fileId } = JSON.parse(docs.cover);
      let image = getImage(bucketId, fileId);
      return {
        id: docs.$id,
        slug: docs.slug,
        content: docs.content,
        title: docs.title,
        image: image,
        date: docs.date,
        summary: docs.summary,
        minutes: docs.minutes,
      };
    } else {
      return {
        id: docs.$id,
        slug: docs.slug,
        content: docs.content,
        title: docs.title,
        date: docs.date,
        summary: docs.summary,
        minutes: docs.minutes,
      };
    }
  });

  return filtered_editorial_data;
};
