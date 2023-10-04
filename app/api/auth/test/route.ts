import { NextResponse } from "next/server";

export async function GET() {
  try {
    throw new Error("This is an error");
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
