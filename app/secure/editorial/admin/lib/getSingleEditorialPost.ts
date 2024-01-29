import { database } from "@/app/secure/editorial/admin/controller/appwrite";

export default async function getEditorialDocument(doc_id: string) {
  try {
    const documentPromise = await database.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_COLLECTION_ID!,
      doc_id
    );
    if (documentPromise.cover) {
      const { fileId } = JSON.parse(documentPromise.cover);
      // let image = await getImage(bucketId, fileId);
      return {
        title: documentPromise.title,
        id: documentPromise.$id,
        summary: documentPromise.summary,
        date: documentPromise.date,
        minutes: documentPromise.minutes,
        content: documentPromise.content,
        image: fileId,
        views: documentPromise.views,
      };
    } else {
      return {
        title: documentPromise.title,
        id: documentPromise.$id,
        summary: documentPromise.summary,
        date: documentPromise.data,
        minutes: documentPromise.minutes,
        content: documentPromise.content,
        views: documentPromise.views,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
