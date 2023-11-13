import { Client, Storage } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655231c3469bf1ef8d8f");

export const storage = new Storage(client);
