import { MongoClient } from "mongodb";

export default async function mongoConnect() {
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();
    const db = client.db("omenai");
    return { db, client };
  } catch (error) {
    return {
      redirect: {
        destination: "/505",
        permanent: false,
      },
    };
  }
}
