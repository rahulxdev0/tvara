"use server";
import { GoogleGenAI } from "@google/genai";

interface GeminiRequestBody {
  prompt: string;
}

export async function POST(req: Request): Promise<Response> {
   

  try {
    const body: GeminiRequestBody = await req.json();

    if (!body.prompt) {
      return Response.json(
        { success: false, message: "Prompt is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

     console.log("Gemini key loaded:", process.env.GEMINI_API_KEY?.slice(0, 5));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: body.prompt,
    });

    return Response.json({
      success: true,
      text: response.text,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
