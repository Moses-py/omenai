import { database } from "../controller/appwrite";
import { getEditorialData } from "./getEditorialData";
import { getPromiseResolvedEditorialData } from "./getPromisedResolvedEditorialData";

export const listEditorials = async () => {
  try {
    let promise = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_COLLECTION_ID!
    );
    const articles = await getEditorialData(promise);
    const resolvedArticles = await getPromiseResolvedEditorialData(articles);
    return resolvedArticles;
  } catch (error) {
    console.log(error);
  }
};
