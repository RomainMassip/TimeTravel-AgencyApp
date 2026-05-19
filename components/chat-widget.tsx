"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bienvenue, voyageur temporel. Je suis Chronos, votre guide IA à travers les âges. Comment puis-je vous aider à planifier votre voyage dans le temps ?",
    },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: text }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Une erreur temporelle s'est produite..." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isOpen && (
        <div id="assistant" className="fixed bottom-24 right-6 w-[90vw] max-w-md z-50">
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="bg-secondary/50 px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Chronos IA</h3>
                  <p className="text-xs text-muted-foreground">Votre guide temporel</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-secondary/50 rounded-tl-sm text-foreground"
                      : "bg-primary text-primary-foreground rounded-tr-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Suggestions (uniquement au début) */}
              {messages.length === 1 && (
                <div className="mt-2 space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Questions suggérées</p>
                  {["Quelle est la meilleure époque pour les amateurs d'art ?", "Le tourisme des dinosaures est-il sans danger ?", "Parlez-moi de Paris 1889"].map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-all border border-transparent hover:border-primary/30"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-sm px-4 py-3 text-muted-foreground text-sm italic">
                    Chronos réfléchit...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder="Posez-moi une question sur le voyage dans le temps..."
                  className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <Button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading}
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 w-12"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 transition-transform duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}