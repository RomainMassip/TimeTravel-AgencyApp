import Link from "next/link"
import { Sparkles } from "lucide-react"

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
]

const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Temporal Regulations", href: "#" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="font-serif text-xl tracking-wide text-foreground">
                TimeTravel <span className="text-primary">Agency</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Pioneering luxury temporal tourism since 2089. Your gateway to history&apos;s most extraordinary moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Destinations", "AI Assistant", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>&copy; 2089 TimeTravel Agency. All timelines reserved.</span>
          </div>
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
