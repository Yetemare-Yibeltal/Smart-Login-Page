import { NextResponse } from "next/server";
import { sendPasswordResetEmail } from "@/lib/email/mailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email address required" },
        { status: 400 },
      );
    }

    // Mock reset token generation
    const mockToken = "reset_token_" + Math.random().toString(36).substring(2);
    await sendPasswordResetEmail(email, mockToken);

    return NextResponse.json(
      { message: "Password reset link sent to your email." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
