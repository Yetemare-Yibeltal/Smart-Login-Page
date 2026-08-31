import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    settings: {
      twoFactorEnabled: false,
      notifications: true,
      theme: "dark",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json({
      message: "Settings updated successfully",
      settings: body,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 400 },
    );
  }
}
