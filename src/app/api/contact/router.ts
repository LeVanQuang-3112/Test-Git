// app/api/contact/route.ts (Route Handler for API)
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log(name, email, message, "name, email, message");

  // Xử lý logic với dữ liệu nhận được từ form (ví dụ: lưu vào cơ sở dữ liệu)

  // Trả về phản hồi
  return NextResponse.json({ success: true });
}
