import { purchase_artwork } from "@/services/purchase_artwork/purchase_artwork";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const response = await purchase_artwork(
    data.email,
    data.name,
    data.artwork,
    data.amount
  );

  if (response.ok) {
    const res = await response.json();
    return NextResponse.json(
      { message: res.message, data: res.data },
      { status: 200 }
    );
  }
}
