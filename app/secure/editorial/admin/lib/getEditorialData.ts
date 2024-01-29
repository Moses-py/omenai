import { getImage } from "./getImageData";

export const getEditorialData = async (rawEditorialData: {
  documents: any[];
}) => {
  const filtered_editorial_data = rawEditorialData?.documents.map((docs) => {
    if (docs.cover) {
      const { fileId } = JSON.parse(docs.cover);
      // let image = getImage(bucketId, fileId);
      return {
        id: docs.$id,
        slug: docs.slug,
        content: docs.content,
        title: docs.title,
        image: fileId,
        date: docs.date,
        summary: docs.summary,
        minutes: docs.minutes,
        views: docs.views,
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
        views: docs.views,
      };
    }
  });

  return filtered_editorial_data;
};
