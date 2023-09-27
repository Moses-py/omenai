import mongoConnect from "@/lib/mongo_connect/mongoConnect";
import { NextResponse as res } from "next/server";

export async function POST() {
  const { db, client } = await mongoConnect();

  if (!db) return res.json({ message: "Connection failed" });

  const data = await db.collection("gallery").insertOne({
    name: "Moses Chukwunekwu",
    hobbies: ["Anime", "Call of duty", "Coding", "Messi"],
  });

  client.close();
  return res.json({
    data,
    message: "Connection successful and data retrieved",
  });
}
