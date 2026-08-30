export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;

  // In production, connect your provider (Resend, SendGrid, etc.)
  console.log(`[EMAIL DISPATCH] Verification email sent to: ${email}`);
  console.log(`[EMAIL DISPATCH] Verification Link: ${verifyUrl}`);

  return { success: true };
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/forgot-password?token=${token}`;

  console.log(`[EMAIL DISPATCH] Password reset sent to: ${email}`);
  console.log(`[EMAIL DISPATCH] Reset Link: ${resetUrl}`);

  return { success: true };
}
