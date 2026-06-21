import { Link } from 'react-router-dom'
import { ArrowLeft, UtensilsCrossed } from 'lucide-react'

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="relative min-h-screen bg-background text-ink">
      <div className="noise-overlay" />
      <header className="border-b border-divider bg-surface/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
              <UtensilsCrossed className="h-5 w-5" strokeWidth={2.3} />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">Mama&apos;s Kitchen</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary lift-on-hover">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter mb-3">{title}</h1>
        <p className="text-muted text-sm mb-12">Last updated {updated}</p>
        <div className="prose-legal space-y-6 text-[15px] leading-relaxed text-ink/80">
          {children}
        </div>
      </main>
      <footer className="border-t border-divider py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Mama&apos;s Kitchen · 134 E University Ave &amp; 605 S Wright St, Champaign, IL
      </footer>
    </div>
  )
}

export function H2({ children }) {
  return <h2 className="font-display text-xl font-bold tracking-tight text-ink pt-4">{children}</h2>
}
