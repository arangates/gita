import { NextResponse } from "next/server";
import { chapters } from "@/app/(navigation)/slokas/gita";

export async function GET() {
  return NextResponse.json(chapters);
}
