import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("[register] GOOGLE_SCRIPT_URL 없음");
    return NextResponse.json({ error: "설정 오류" }, { status: 500 });
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, sheetId: process.env.GOOGLE_SHEET_ID }),
    });
    const text = await res.text();
    console.log("[register] Apps Script 응답:", res.status, text);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[register] 오류:", err);
    return NextResponse.json({ error: "제출 실패" }, { status: 500 });
  }
}
