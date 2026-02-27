import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface RequestBody {
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { message } = (await req.json()) as RequestBody;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const result = await model.generateContent(message);
    const response = await result.response;

    return NextResponse.json({ reply: response.text() });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Something went wrong with Gemini API" },
      { status: 500 }
    );
  }
}