import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const req = await request.json();

    if (req.event === "charge.completed") {
      return NextResponse.json(
        {
          message: "successful",
          data: req,
        },
        { status: 200 }
      );
    }
  } catch (error) {}
}
