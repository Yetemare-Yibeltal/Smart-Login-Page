import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    user: {
      id: "user-1",
      name: "Metages Yibeltal",
      email: "metages@example.com",
      role: "ADMIN",
      createdAt: new Date(),
    },
  });
}
