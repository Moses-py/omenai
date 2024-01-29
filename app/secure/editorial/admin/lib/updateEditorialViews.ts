import { database } from "../controller/appwrite";

export const updateDocView = async (doc_id: string, currentViews: number) => {
  try {
    const update = await database.updateDocument(
      process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_COLLECTION_ID!,
      doc_id,
      { views: currentViews + 1 }
    );
  } catch (error) {
    console.log(error);
  }
};
