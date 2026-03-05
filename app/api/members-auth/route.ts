import { NextRequest, NextResponse } from "next/server";

const MEMBERS_PASSWORD = process.env.MEMBERS_PASSWORD || "cherry1925";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password === MEMBERS_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("members_auth", "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("members_auth");
  return NextResponse.json({ authenticated: cookie?.value === "1" });
}
