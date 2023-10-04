import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";

export async function POST(request: Request) {
  await connectMongoDB();
  try {
    const { password, email } = await request.json();
  } catch (error) {}
}
