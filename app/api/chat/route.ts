import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  console.log("Clé présente ?", !!process.env.GROQ_API_KEY)
  console.log("Début clé :", process.env.GROQ_API_KEY?.slice(0, 10))
  const { messages } = await req.json()

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "Tu es Chronos, un guide IA spécialisé dans le voyage temporel. Réponds de façon mystérieuse et poétique, toujours en lien avec l'histoire et le temps.",
        },
        ...messages,
      ],
      max_tokens: 500,
    }),
  })

  const data = await response.json()
  const reply = data.choices?.[0]?.message?.content ?? "Je n'ai pas pu voyager jusqu'à cette réponse..."

  return NextResponse.json({ reply })
}