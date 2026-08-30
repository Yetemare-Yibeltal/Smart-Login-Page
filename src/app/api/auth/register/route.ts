import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validations/auth";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const limitCheck = rateLimit(ip, 5, 60000);

    if (!limitCheck.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const validatedData = registerSchema.parse(body);

    // Mock account registration - persist to Prisma user model
    return NextResponse.json(
      {
        message: "User registered successfully.",
        user: { name: validatedData.name, email: validatedData.email },
      },
      { status: 201 },
    );
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json(
      { error: error.message || "Invalid payload" },
      { status: 400 },
    );
  }
}
