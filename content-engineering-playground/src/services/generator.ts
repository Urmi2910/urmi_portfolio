/**
 * Sends a structured prompt to OpenAI and returns the generated UI copy.
 * On the portfolio site, requests go through /api/generate so the API key stays on the server.
 */

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

interface ChatCompletionResponse {
  choices?: Array<{
    message?: {
      content?: string
    }
  }>
  error?: {
    message?: string
  }
}

interface GenerateApiResponse {
  message?: string
  error?: string
}

export class GenerateError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'GenerateError'
    this.status = status
  }
}

async function generateViaProxy(prompt: string): Promise<string> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  })

  const data = (await response.json()) as GenerateApiResponse

  if (!response.ok) {
    throw new GenerateError(data.error ?? `Request failed (${response.status})`, response.status)
  }

  const message = data.message?.trim()

  if (!message) {
    throw new Error('The server returned an empty response.')
  }

  return message
}

async function generateViaOpenAI(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  if (!apiKey?.trim()) {
    throw new Error(
      'OpenAI API key not found. Add VITE_OPENAI_API_KEY to the .env file in the project root, then restart the dev server.',
    )
  }

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey.trim()}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    }),
  })

  const data = (await response.json()) as ChatCompletionResponse

  if (!response.ok) {
    throw new Error(data.error?.message ?? `OpenAI request failed (${response.status})`)
  }

  const message = data.choices?.[0]?.message?.content?.trim()

  if (!message) {
    throw new Error('OpenAI returned an empty response.')
  }

  return message
}

export async function generateMessage(prompt: string): Promise<string> {
  if (import.meta.env.VITE_USE_API_PROXY === 'true') {
    return generateViaProxy(prompt)
  }

  return generateViaOpenAI(prompt)
}
