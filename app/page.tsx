import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DestinationsSection } from "@/components/destinations-section"
import { ChatWidget } from "@/components/chat-widget"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DestinationsSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
