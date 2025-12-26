"use client";

import { useState } from "react";

interface GeminiResponse {
  success: boolean;
  text?: string;
  message?: string;
}

const Page = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const callGemini = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data: GeminiResponse = await res.json();

      if (data.success && data.text) {
        setResponse(data.text);
      } else {
        setResponse(data.message || "Something went wrong");
      }
    } catch (error) {
      setResponse("Failed to connect with Gemini");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 space-y-5">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-slate-800 text-center">
          Gemini AI Playground
        </h1>

        {/* Input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />

        {/* Button */}
        <button
          onClick={callGemini}
          disabled={loading}
          className="w-full rounded-xl bg-orange-600 text-white py-3 font-medium hover:bg-orange-700 transition disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate Response"}
        </button>

        {/* Response Card */}
        {response && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-700 mb-2">
              Gemini Response
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {response}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
