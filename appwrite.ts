import { Client, Databases, Storage } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_CLIENT_ID!);

export const storage = new Storage(client);
