import { NextResponse } from "next/server";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const MAX_PROMPT_LENGTH = 12_000;

interface ChatCompletionResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    return NextResponse.json(
      { error: "Message generation is not configured on this site yet." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const prompt =
    typeof body === "object" && body !== null && "prompt" in body
      ? (body as { prompt?: unknown }).prompt
      : undefined;

  if (typeof prompt !== "string" || !prompt.trim()) {
    return NextResponse.json({ error: "A prompt is required." }, { status: 400 });
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return NextResponse.json({ error: "Prompt is too long." }, { status: 400 });
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt.trim(),
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = (await response.json()) as ChatCompletionResponse;

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message ?? "OpenAI request failed." },
        { status: response.status },
      );
    }

    const message = data.choices?.[0]?.message?.content?.trim();

    if (!message) {
      return NextResponse.json({ error: "OpenAI returned an empty response." }, { status: 502 });
    }

    return NextResponse.json({ message });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong generating the message. Try again." },
      { status: 500 },
    );
  }
}
