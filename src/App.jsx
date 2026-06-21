import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed, ArrowUpRight, ArrowRight, Phone, Mail, MapPin, Menu as MenuIcon, X,
  Clock, Star, Leaf, Soup, Flame, CookingPot, Drumstick, Utensils, Coffee,
  Award, Store, Upload, CheckCircle2, Trash2, MousePointer2, ShoppingBag, Navigation,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const EMAIL = 'hello@mamaskitchen-cu.com'
const GRUBHUB_URL = 'https://www.grubhub.com/restaurant/mamas-kitchen-134-e-university-ave-champaign/10414888'

// Primary phone (University Ave) — used for quick-call CTAs
const PHONE_DISPLAY = '(260) 228-3252'
const PHONE_TEL = '+12602283252'

const LOCATIONS = [
  {
    name: 'University Ave',
    badge: 'The original',
    address: '134 E University Ave, Champaign, IL 61820',
    phoneDisplay: '(260) 228-3252',
    phoneTel: '+12602283252',
    hours: 'Daily · 11:00am – 8:30pm',
    diet: 'Pure vegetarian',
    note: 'Tucked inside the Indian market on University Ave — shop the grocery and eat in one stop.',
    rating: '4.9',
    reviews: '44+',
    maps: 'https://maps.google.com/?q=Mama%27s+Kitchen+134+E+University+Ave+Champaign+IL',
  },
  {
    name: 'Campustown',
    badge: 'Now open · dine-in',
    address: '605 S Wright St, Champaign, IL 61820',
    phoneDisplay: '(217) 305-5112',
    phoneTel: '+12173055112',
    hours: 'Open daily · closes 9:00pm',
    diet: 'Veg & non-veg',
    note: 'A proper sit-down spot in the heart of UIUC campus — now serving chicken, lamb and egg dishes too.',
    rating: '4.5',
    reviews: '28',
    maps: 'https://maps.google.com/?q=Mama%27s+Kitchen+605+S+Wright+St+Champaign+IL',
  },
]

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Favourites', href: '#favourites' },
  { label: 'Menu', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Visit', href: '#contact' },
]

const SERVICES = [
  { icon: Soup, title: 'Chaat & Street Snacks', text: 'Pani puri, dahi puri, sev puri, samosa chaat, veg puffs and the Kutchi dabeli that started the buzz.' },
  { icon: Flame, title: 'Indo-Chinese', text: 'The famous dry manchurian, gobi Manchurian and hakka-style plates with real wok heat.' },
  { icon: CookingPot, title: 'Veg Curries', text: 'Palak paneer, kaju curry, chana masala, dal and pav bhaji — Gujarati & North Indian home cooking.' },
  { icon: Drumstick, title: 'Chicken, Lamb & Eggs', tag: 'Campustown', text: 'New at our Wright St spot — flavour-packed chicken entrées, lamb and egg dishes.' },
  { icon: Utensils, title: 'Biryani & Rice', text: 'Fragrant veg biryani and the much-loved chicken biryani, layered with whole spices.' },
  { icon: Coffee, title: 'Naan, Sweets & Chai', text: 'Garlic & butter naan, house desserts, and hot masala chai — free while you wait in-store.' },
]

/* ----------------------------------------------------------------- */
/*  Navbar                                                            */
/* ----------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/5' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
              <UtensilsCrossed className="h-5 w-5" strokeWidth={2.3} />
            </span>
            <span className={`font-display font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
              Mama&apos;s Kitchen
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`lift-on-hover px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={GRUBHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn hidden sm:inline-flex items-center gap-1.5 bg-primary text-white pl-4 pr-3 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
            >
              Order online <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden grid h-9 w-9 place-items-center rounded-full transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-deep/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-display font-bold text-lg text-white">Mama&apos;s Kitchen</span>
          <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full text-white" aria-label="Close menu">
            <X className="h-7 w-7" />
          </button>
        </div>
        <div className="flex flex-col px-6 pt-10 gap-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold text-white/90 py-3 border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GRUBHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold"
          >
            <ShoppingBag className="h-5 w-5" /> Order on Grubhub
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 glass-dark text-white px-6 py-4 rounded-full font-semibold border border-white/15"
          >
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------- */
/*  Hero                                                              */
/* ----------------------------------------------------------------- */
function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=2000&q=80"
        alt="A spread of vibrant Indian dishes"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.5]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-deep/75" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* floating spice motes top-right */}
      <div className="pointer-events-none absolute top-24 right-6 sm:right-16 z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="absolute block rounded-full animate-float"
            style={{
              width: `${8 + i * 3}px`,
              height: `${8 + i * 3}px`,
              top: `${i * 34}px`,
              right: `${(i % 2) * 40}px`,
              background: i % 2 ? 'rgba(244,166,35,0.55)' : 'rgba(239,91,91,0.5)',
              filter: 'blur(0.5px)',
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 min-h-[100dvh] flex flex-col justify-end">
        <p className="hero-meta font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/75 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>Now 2 locations · Champaign, IL</span>
          <span className="text-accent">•</span>
          <span>Dine-in</span>
          <span className="text-accent">•</span>
          <span>Takeaway</span>
          <span className="text-accent">•</span>
          <span>Delivery</span>
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] max-w-5xl">
          <span className="hero-line-1 block">Mumbai street food,</span>
          <span className="hero-line-2 block font-serif italic font-medium text-accent">made like Mama&apos;s.</span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-white/75 text-base sm:text-lg leading-relaxed">
          Mumbai street snacks and Gujarati & North Indian home cooking — samosas, dabeli, pani puri, palak paneer and
          our legendary dry manchurian. Pure veg on University Ave; veg <span className="text-accent">&amp;</span> non-veg
          at our new Campustown dine-in. Cooked to order, with free masala chai while you wait.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <a
            href={GRUBHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30"
          >
            <ShoppingBag className="h-4 w-4" /> Order on Grubhub
          </a>
          <a
            href="#menu"
            className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3.5 rounded-full font-semibold border border-white/15"
          >
            See the menu <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* rating chips — both locations */}
        <div className="hero-meta mt-10 flex flex-wrap items-center gap-3">
          {LOCATIONS.map((l) => (
            <div key={l.name} className="inline-flex items-center gap-2.5 rounded-full glass-dark border border-white/10 px-4 py-2">
              <span className="flex items-center gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent" strokeWidth={0} />
                ))}
              </span>
              <span className="text-white text-sm font-semibold">{l.rating}</span>
              <span className="text-white/60 text-sm">· {l.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  Feature 3a — Dish shuffler                                        */
/* ----------------------------------------------------------------- */
const SHUFFLE_DISHES = [
  { name: 'Dry Manchurian', tag: 'Most ordered', emoji: '🔥' },
  { name: 'Kutchi Dabeli', tag: 'Street classic', emoji: '🫓' },
  { name: 'Pani Puri', tag: 'Saturdays · unlimited', emoji: '💧' },
  { name: 'Hyderabadi Onion Samosa', tag: '4 pieces', emoji: '🥟' },
]

function DishShuffler() {
  const [order, setOrder] = useState([0, 1, 2, 3])
  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => setOrder((o) => [...o.slice(1), o[0]]), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {order.map((dishIdx, pos) => {
        const d = SHUFFLE_DISHES[dishIdx]
        const styles = [
          { scale: 1, y: 0, blur: 0, opacity: 1, z: 30 },
          { scale: 0.94, y: 14, blur: 2, opacity: 0.7, z: 20 },
          { scale: 0.88, y: 28, blur: 4, opacity: 0.4, z: 10 },
          { scale: 0.84, y: 40, blur: 6, opacity: 0, z: 0 },
        ][pos]
        return (
          <div
            key={dishIdx}
            className="absolute inset-x-0 top-0 rounded-2xl border border-divider bg-surface p-5 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${styles.y}px) scale(${styles.scale})`,
              filter: `blur(${styles.blur}px)`,
              opacity: styles.opacity,
              zIndex: styles.z,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{d.tag}</span>
              <span className="text-2xl">{d.emoji}</span>
            </div>
            <p className="mt-4 font-display text-xl font-bold text-ink">{d.name}</p>
            <div className="mt-3 flex items-center gap-1 text-accent">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent" strokeWidth={0} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------- */
/*  Feature 3b — Signature animation: spice grains over the tava     */
/* ----------------------------------------------------------------- */
const SIZZLE_STATES = ['Grinding masala', 'Tempering spices', 'On the tava', 'Plated hot']

function SpiceTava() {
  const [stateIdx, setStateIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setStateIdx((s) => (s + 1) % SIZZLE_STATES.length), 2300)
    return () => clearInterval(id)
  }, [])

  const grains = [
    { left: 18, delay: 0, dur: 2.6, size: 7, red: true },
    { left: 30, delay: 0.8, dur: 2.9, size: 5, red: false },
    { left: 42, delay: 1.5, dur: 2.4, size: 8, red: true },
    { left: 54, delay: 0.4, dur: 3.1, size: 6, red: false },
    { left: 64, delay: 1.1, dur: 2.7, size: 7, red: true },
    { left: 74, delay: 1.9, dur: 2.5, size: 5, red: false },
    { left: 84, delay: 0.6, dur: 3.0, size: 8, red: true },
  ]

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, #FFF3E0 0%, #F6D9A8 65%, #EFC07A 100%)' }}>
      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 96px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.85; }
          80%  { transform: translateX(-50%) scale(3.4); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.4); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* atmospheric blobs */}
      <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
      <div className="absolute top-2 right-4 h-16 w-16 rounded-full bg-accent/30 blur-xl" />

      {/* header strip */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-2.5 z-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark/80">Spice blend</span>
        <span className="font-mono text-[10px] text-primary-dark/70">7 spices</span>
      </div>

      {/* source: spice jar */}
      <svg className="absolute left-1/2 -translate-x-1/2 top-9 z-10" width="46" height="30" viewBox="0 0 46 30" fill="none">
        <rect x="13" y="4" width="20" height="6" rx="2" fill="#A41E1E" />
        <path d="M10 10h26l-2 14a4 4 0 0 1-4 3.4H16a4 4 0 0 1-4-3.4L10 10Z" fill="#D62828" />
        <rect x="16" y="6" width="14" height="2" rx="1" fill="#F4A623" />
        <circle cx="18" cy="9.5" r="0.8" fill="#7a1414" />
        <circle cx="23" cy="9.5" r="0.8" fill="#7a1414" />
        <circle cx="28" cy="9.5" r="0.8" fill="#7a1414" />
      </svg>

      {/* falling spice grains */}
      {grains.map((g, i) => (
        <span
          key={i}
          className="absolute"
          style={{ left: `${g.left}%`, top: '34px', animation: `rain-fall ${g.dur}s linear ${g.delay}s infinite` }}
        >
          <svg width={g.size + 4} height={g.size + 6} viewBox="0 0 12 16" fill="none">
            <ellipse cx="6" cy="8" rx="4" ry="6" fill={g.red ? '#C81E1E' : '#E8951F'} />
            <ellipse cx="4.6" cy="6" rx="1.2" ry="2" fill={g.red ? '#EF5B5B' : '#F4C66B'} opacity="0.8" />
          </svg>
        </span>
      ))}

      {/* tava surface */}
      <svg className="absolute bottom-7 inset-x-0 w-full" height="20" viewBox="0 0 400 20" preserveAspectRatio="none" fill="none">
        <path d="M0 12 Q100 6 200 12 T400 12 V20 H0 Z" fill="#9a5a1e" opacity="0.5" />
        <path d="M0 14 Q100 9 200 14 T400 14" stroke="#7a4214" strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>

      {/* sizzle ripples */}
      {[28, 52, 72].map((left, i) => (
        <span
          key={i}
          className="absolute bottom-9 h-3 w-3 rounded-full border border-primary/60"
          style={{ left: `${left}%`, animation: `rain-ripple ${2.4 + i * 0.3}s ease-out ${i * 0.5}s infinite` }}
        />
      ))}

      {/* footer status strip */}
      <div className="absolute bottom-0 inset-x-0 flex items-center gap-2 px-4 py-2.5 bg-deep/85 z-20">
        <span className="h-2 w-2 rounded-full bg-accent ring-pulse" />
        <span key={stateIdx} className="font-mono text-[11px] text-white" style={{ animation: 'rain-fadein 0.4s ease-out' }}>
          {SIZZLE_STATES[stateIdx]}…
        </span>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- */
/*  Feature 3c — Pickup time picker (cursor demo)                     */
/* ----------------------------------------------------------------- */
const SLOTS = ['11:30', '12:15', '1:00', '5:30', '6:15', '7:00']

function PickupPicker() {
  const [step, setStep] = useState(0) // 0 idle, 1 hover, 2 click, 3 confirmed
  const [target, setTarget] = useState(4)
  useEffect(() => {
    if (prefersReducedMotion) return
    const seq = [
      () => setStep(1),
      () => setStep(2),
      () => setStep(3),
      () => { setStep(0); setTarget((t) => (t + 2) % SLOTS.length) },
    ]
    let i = 0
    const id = setInterval(() => { seq[i % seq.length](); i++ }, 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-44 w-full rounded-2xl border border-divider bg-surface p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Pickup today</span>
        <span className="font-mono text-[10px] text-muted flex items-center gap-1"><Clock className="h-3 w-3" /> 11–8:30</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {SLOTS.map((s, i) => {
          const active = i === target
          const chosen = active && step >= 2
          return (
            <div
              key={s}
              className={`relative rounded-lg py-2.5 text-center text-sm font-semibold transition-all duration-300 ${
                chosen
                  ? 'bg-primary text-white scale-105'
                  : active && step === 1
                  ? 'bg-primary/10 text-primary ring-1 ring-primary/40'
                  : 'bg-background text-ink/70'
              }`}
            >
              {s}
            </div>
          )
        })}
      </div>

      {/* confirmation toast */}
      <div
        className={`absolute inset-x-4 bottom-3 flex items-center gap-2 rounded-xl bg-deep px-3 py-2.5 transition-all duration-500 ${
          step === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <CheckCircle2 className="h-4 w-4 text-accent" />
        <span className="font-mono text-[11px] text-white">Order placed · ready {SLOTS[target]}pm</span>
      </div>

      {/* cursor */}
      <MousePointer2
        className="absolute h-5 w-5 text-ink drop-shadow transition-all duration-700 ease-out"
        style={{
          left: `${18 + (target % 3) * 30}%`,
          top: `${target < 3 ? 42 : 58}%`,
          transform: step === 2 ? 'scale(0.8)' : 'scale(1)',
          fill: '#fff',
        }}
      />
    </div>
  )
}

/* ----------------------------------------------------------------- */
/*  Features section                                                  */
/* ----------------------------------------------------------------- */
const FEATURES = [
  {
    eyebrow: 'Crowd favourites',
    title: 'The dishes people drive across town for',
    Comp: DishShuffler,
    text: 'Our regulars have their staples — and so will you.',
    bullets: ['Dry manchurian & gobi', 'Samosa chaat & dabeli', 'Saturday pani puri'],
  },
  {
    eyebrow: 'Cooked fresh',
    title: 'Seven spices, ground and tempered in-house',
    Comp: SpiceTava,
    text: 'Nothing sits in a warmer. Every plate is fired to order.',
    bullets: ['Fresh masala daily', 'Small-batch tava cooking', '100% vegetarian'],
  },
  {
    eyebrow: 'Easy pickup',
    title: 'Order ahead, skip the wait',
    Comp: PickupPicker,
    text: 'Pick a time, grab your bag — chai is on us while you wait.',
    bullets: ['Pickup 11am–8:30pm', 'Delivery in your area', 'Free chai in-store'],
  },
]

function Features() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="favourites" ref={ref} className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Why people love it</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-balance">
            Street-food energy, <span className="font-serif italic text-primary">home-kitchen</span> heart
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card rounded-3xl bg-surface border border-divider p-6 sm:p-8 shadow-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">{f.eyebrow}</p>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-5 text-balance">{f.title}</h3>
              <f.Comp />
              <p className="mt-5 text-muted text-sm leading-relaxed">{f.text}</p>
              <ul className="mt-4 space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  CountUp + Pillars                                                 */
/* ----------------------------------------------------------------- */
function CountUp({ end, suffix = '', duration = 2000, decimals = 0 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTs = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - startTs) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(end * eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])
  return <span ref={ref} className="tabular-nums">{value.toFixed(decimals)}{suffix}</span>
}

const PILLARS = [
  { label: 'Locations now', end: 2, decimals: 0, suffix: '', desc: 'The original on University Ave and our new Campustown dine-in — both cooking fresh every day.' },
  { label: 'Google rating', end: 4.9, decimals: 1, suffix: '★', desc: 'On University Ave, with 4.5★ and climbing fast at the brand-new Campustown spot.' },
  { label: 'On the menu', end: 40, decimals: 0, suffix: '+', desc: 'Snacks, chaats, curries, Indo-Chinese, biryani and sweets — now with chicken, lamb & eggs at Campustown.' },
]

function Pillars() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-divider">
          {PILLARS.map((p) => (
            <div key={p.label} className="px-0 lg:px-10 py-8 lg:py-0 first:lg:pl-0 last:lg:pr-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">{p.label}</p>
              <div className="font-display text-6xl sm:text-7xl font-bold tracking-tighter gradient-text leading-none">
                <CountUp end={p.end} suffix={p.suffix} decimals={p.decimals} />
              </div>
              <div className="relative mt-4 h-px w-full overflow-hidden bg-divider">
                <span
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: 'pillar-sweep 3s ease-in-out infinite' }}
                />
              </div>
              <p className="mt-5 text-muted text-sm sm:text-base leading-relaxed max-w-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(200%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  Protocol — Our Craft sticky stack                                 */
/* ----------------------------------------------------------------- */
const STEPS = [
  {
    n: '01',
    eyebrow: 'We grind',
    title: 'Spices roasted & ground in-house',
    text: 'Every morning starts with whole spices roasted and ground fresh. That is why the masala tastes alive, not dusty — the difference you notice in the first bite.',
    bullets: ['Whole spices, daily', 'No pre-mixed powders', 'Recipes from home'],
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    n: '02',
    eyebrow: 'We cook',
    title: 'Fired to order, in small batches',
    text: 'Nothing sits under a heat lamp. Your dabeli is pressed, your manchurian is tossed, your puri is filled — when you order it. Hot, crisp, and exactly as it should be.',
    bullets: ['Cooked when ordered', 'Tava-fresh, never reheated', 'Adjusted to your spice level'],
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    n: '03',
    eyebrow: 'We serve',
    title: 'Handed over hot — with chai on us',
    text: 'Dine in at the market, grab takeaway, or get it delivered. However you order, there is a warm welcome and a free cup of masala chai while you wait.',
    bullets: ['Dine-in, pickup & delivery', 'Free chai in-store', 'Friendly, patient staff'],
    img: 'https://images.unsplash.com/photo-1571805529673-0f56b922b359?auto=format&fit=crop&w=1200&q=80',
  },
]

function Protocol() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.proto-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: { trigger: card, start: 'top top+=100', end: '+=500', scrub: 1 },
          scale: 0.92, filter: 'blur(6px) saturate(0.7)', opacity: 0.5, ease: 'none',
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="craft" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Our craft</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-balance">
            Three steps, <span className="font-serif italic text-primary">zero shortcuts</span>
          </h2>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {STEPS.map((s) => (
          <div key={s.n} className="proto-card sticky top-24 mb-8" style={{ willChange: 'transform' }}>
            <div className="rounded-3xl bg-surface border border-divider shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-5xl font-bold text-primary/20">{s.n}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-dark">{s.eyebrow}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-5 text-balance">{s.title}</h3>
                <p className="text-muted text-base leading-relaxed max-w-lg">{s.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm sm:text-base text-ink/80">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2 relative min-h-[220px]">
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  ServicesGrid — the menu                                           */
/* ----------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="menu" ref={ref} className="relative bg-deep text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">The menu</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white text-balance">
            What&apos;s on the <span className="font-serif italic text-accent">tava</span>
          </h2>
          <p className="mt-5 text-white/60 text-base leading-relaxed">
            Mumbai street snacks, Gujarati &amp; North Indian home cooking and the Indo-Chinese plates the area was
            missing. University Ave is pure vegetarian; our Campustown kitchen adds chicken, lamb and egg dishes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {SERVICES.map((s) => (
            <div key={s.title} className="svc-tile group bg-deep p-8 sm:p-10 transition-colors hover:bg-white/[0.03]">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6" strokeWidth={2.3} />
                </span>
                {s.tag && (
                  <span className="rounded-full bg-accent/15 text-accent font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1">
                    {s.tag} only
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2.5 text-white/60 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={GRUBHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30"
          >
            <ShoppingBag className="h-4 w-4" /> Order online on Grubhub
          </a>
          <p className="text-white/40 text-sm font-mono text-center">
            Prices may vary between in-store, pickup and delivery · No fees on delivery orders $50+
          </p>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  Locations — two cards                                             */
/* ----------------------------------------------------------------- */
function Locations() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.loc-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 36, opacity: 0, duration: 0.8, stagger: 0.18, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="locations" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Find us</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-balance">
            Two kitchens, <span className="font-serif italic text-primary">one Mama&apos;s</span>
          </h2>
          <p className="mt-5 text-muted text-base leading-relaxed">
            Catch us at the original inside the Indian market, or pull up a chair at the new Campustown dine-in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LOCATIONS.map((l) => (
            <div key={l.name} className="loc-card rounded-3xl bg-surface border border-divider shadow-sm overflow-hidden flex flex-col">
              <div className="flex items-start justify-between p-7 sm:p-8 pb-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark">{l.badge}</span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight">{l.name}</h3>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-sm font-semibold">
                  <Star className="h-3.5 w-3.5 fill-primary" strokeWidth={0} /> {l.rating}
                  <span className="text-primary/60 font-normal">· {l.reviews}</span>
                </span>
              </div>

              <div className="px-7 sm:px-8 pb-2">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  l.diet === 'Pure vegetarian' ? 'bg-green-100 text-green-700' : 'bg-primary/10 text-primary'
                }`}>
                  {l.diet === 'Pure vegetarian' ? <Leaf className="h-3.5 w-3.5" /> : <Drumstick className="h-3.5 w-3.5" />}
                  {l.diet}
                </span>
              </div>

              <div className="p-7 sm:p-8 pt-4 space-y-3 text-sm">
                <p className="flex items-start gap-3 text-ink/80"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {l.address}</p>
                <p className="flex items-center gap-3 text-ink/80"><Clock className="h-4 w-4 text-primary shrink-0" /> {l.hours}</p>
                <a href={`tel:${l.phoneTel}`} className="flex items-center gap-3 text-ink/80 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary shrink-0" /> {l.phoneDisplay}</a>
                <p className="text-muted leading-relaxed pt-1">{l.note}</p>
              </div>

              <div className="mt-auto p-7 sm:p-8 pt-0 flex flex-wrap gap-3">
                <a
                  href={GRUBHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
                >
                  <ShoppingBag className="h-4 w-4" /> Order online
                </a>
                <a
                  href={l.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 bg-background border border-divider text-ink px-5 py-3 rounded-full text-sm font-semibold"
                >
                  <Navigation className="h-4 w-4 text-primary" /> Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  TrustSignals                                                      */
/* ----------------------------------------------------------------- */
const TRUST = [
  { icon: Award, title: 'Best Indian on campus', sub: '4.9★ on University Ave and 4.5★ at Campustown — a Champaign-Urbana favourite.' },
  { icon: Leaf, title: 'Veg & non-veg', sub: 'Pure vegetarian on University Ave; chicken, lamb and egg dishes at Campustown.' },
  { icon: Store, title: 'Two Champaign locations', sub: 'Inside the Indian market on University Ave, plus a sit-down dine-in on Wright St.' },
]

function TrustSignals() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShown(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TRUST.map((t, i) => (
            <div
              key={t.title}
              className="rounded-2xl bg-surface border border-divider p-7 shadow-sm transition-all duration-700 lift-on-hover"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-5">
                <t.icon className="h-6 w-6" strokeWidth={2.3} />
              </span>
              <h3 className="font-display text-lg font-bold tracking-tight">{t.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  Contact form                                                      */
/* ----------------------------------------------------------------- */
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

const inputCls =
  'w-full rounded-xl border border-divider bg-background px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [files, setFiles] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }
  const onDrop = (e) => {
    e.preventDefault()
    const list = [...e.dataTransfer.files].filter((f) => f.type.startsWith('image/')).slice(0, 5 - files.length)
    setFiles((prev) => [...prev, ...list])
  }
  const onPick = (e) => {
    const list = [...e.target.files].filter((f) => f.type.startsWith('image/')).slice(0, 5 - files.length)
    setFiles((prev) => [...prev, ...list])
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* left */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Visit / order</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter text-balance">
              Come hungry. <span className="font-serif italic text-primary">Leave happy.</span>
            </h2>
            <p className="mt-5 text-muted text-base leading-relaxed max-w-md">
              Want to order? Head straight to Grubhub. Planning a thali for a crowd or a group order? Drop us a note or
              call either location and we&apos;ll sort it out.
            </p>

            <a
              href={GRUBHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn mt-7 inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30"
            >
              <ShoppingBag className="h-4 w-4" /> Order on Grubhub
            </a>

            <div className="mt-8 space-y-4">
              {LOCATIONS.map((l) => (
                <a key={l.name} href={`tel:${l.phoneTel}`} className="flex items-center gap-4 rounded-2xl bg-surface border border-divider p-4 lift-on-hover">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
                  <span><span className="block font-semibold text-ink">{l.phoneDisplay}</span><span className="text-sm text-muted">{l.name} · {l.diet}</span></span>
                </a>
              ))}
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl bg-surface border border-divider p-4 lift-on-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
                <span><span className="block font-semibold text-ink">{EMAIL}</span><span className="text-sm text-muted">Catering & group orders</span></span>
              </a>
            </div>
          </div>

          {/* right */}
          <div className="lg:col-span-7">
            {status === 'sent' ? (
              <div className="h-full min-h-[420px] rounded-3xl bg-surface border border-divider shadow-sm grid place-items-center p-10 text-center">
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight">Thanks — we&apos;ll be in touch!</h3>
                  <p className="mt-3 text-muted max-w-sm mx-auto">
                    We&apos;ve got your message. For anything urgent, give us a ring at {PHONE_DISPLAY}.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-3xl bg-surface border border-divider shadow-sm p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name"><input required type="text" placeholder="Your name" className={inputCls} /></Field>
                  <Field label="Email"><input required type="email" placeholder="you@email.com" className={inputCls} /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone"><input type="tel" placeholder={PHONE_DISPLAY} className={inputCls} /></Field>
                  <Field label="ZIP"><input type="text" placeholder="61820" className={inputCls} /></Field>
                </div>
                <Field label="Message">
                  <textarea rows={5} placeholder="Catering for 20, a group order, a dietary question…" className={inputCls} />
                </Field>

                {/* file upload */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDrop}
                  className="rounded-xl border-2 border-dashed border-divider bg-background px-4 py-6 text-center transition hover:border-primary/40"
                >
                  <label className="cursor-pointer">
                    <input type="file" accept="image/*" multiple className="hidden" onChange={onPick} />
                    <Upload className="mx-auto h-6 w-6 text-primary mb-2" />
                    <span className="block text-sm text-ink font-medium">Drop a photo or browse</span>
                    <span className="block text-xs text-muted mt-1">Optional — e.g. a reference for your event (max 5 images)</span>
                  </label>
                  {files.length > 0 && (
                    <ul className="mt-4 space-y-2 text-left">
                      {files.map((f, i) => (
                        <li key={i} className="flex items-center justify-between rounded-lg bg-surface border border-divider px-3 py-2 text-sm">
                          <span className="truncate text-ink/80">{f.name}</span>
                          <button type="button" onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} className="text-muted hover:text-primary">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="magnetic-btn w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold shadow-lg shadow-primary/30 disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : <>Send message <ArrowRight className="h-4 w-4" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- */
/*  Footer                                                            */
/* ----------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white"><UtensilsCrossed className="h-5 w-5" strokeWidth={2.3} /></span>
              <span className="font-display font-bold text-xl">Mama&apos;s Kitchen</span>
            </a>
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              Bold Indian street food and home cooking across two Champaign locations — pure veg on University Ave, veg
              &amp; non-veg in Campustown.
            </p>
            <a
              href={GRUBHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              <ShoppingBag className="h-4 w-4" /> Order on Grubhub
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">Menu</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}><a href="#menu" className="hover:text-white transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#favourites" className="hover:text-white transition-colors">Favourites</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">Our craft</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Full menu</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Visit & order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">Find us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {LOCATIONS.map((l) => (
                <li key={l.name} className="leading-relaxed">
                  <span className="block font-semibold text-white/90">{l.name} <span className="font-normal text-white/40">· {l.diet}</span></span>
                  <span className="block">{l.address}</span>
                  <a href={`tel:${l.phoneTel}`} className="block hover:text-white transition-colors">{l.phoneDisplay}</a>
                  <span className="block text-white/40">{l.hours}</span>
                </li>
              ))}
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Mama&apos;s Kitchen. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-white/50 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------- */
/*  App                                                               */
/* ----------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <Locations />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
