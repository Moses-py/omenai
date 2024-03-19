import { sendCronTest } from "@/emails/models/cron_test/sendCronTest";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export async function GET() {
  await sendCronTest();

  return NextResponse.json({ status: 200 });
}
