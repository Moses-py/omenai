import { Client, Account, ID, Storage, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_PROJECT_ID!);

export const storage = new Storage(client);
export const database = new Databases(client);

export { client, ID };
