import { useEffect, useRef, useState } from 'react'
import { Gamepad2, Headphones, HeartPulse, Trophy } from 'lucide-react'

const IMAGES = ['/eg1.jpg', '/eg2.jpg', '/eg3.jpg', '/eg4.jpg', '/eg5.jpg']
const ACCENTS = [
  ['#f97316', '#f59e0b'],
  ['#ec4899', '#f97316'],
  ['#8b5cf6', '#ec4899'],
  ['#06b6d4', '#8b5cf6'],
  ['#f59e0b', '#ef4444'],
]
const WIPES = ['right', 'bottom', 'left', 'top']
const RIBBON = ['Carrier Billing', 'HD Games', 'Video on Demand', 'Audio Books', 'Contests', 'Health & Fitness']
const FEATURES = [
  { id: 'audio', label: 'Audio Books', caption: 'Listen anywhere', Icon: Headphones, delay: 1.5 },
  { id: 'games', label: 'HD Games', caption: 'Play instantly', Icon: Gamepad2, delay: 2 },
  { id: 'health', label: 'Health & Fitness', caption: 'Stay active', Icon: HeartPulse, delay: 2.5 },
  { id: 'contest', label: 'Contests', caption: 'Win rewards', Icon: Trophy, delay: 3 },
]
const STEP_MS = 650
const STORY_MS = 7000
const EXIT_MS = 900
const TITLE = 'Products'
const SUBTITLE = 'Direct Carrier Billing'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Ribbon({ className }) {
  const items = [...RIBBON, ...RIBBON, ...RIBBON]
  return (
    <div className={`dcb-preloader-ribbon ${className}`}>
      <div className="dcb-preloader-ribbon-track">
        {items.map((label, i) => (
          <span key={i}>
            {label}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}

function FeatureBadge({ id, label, caption, Icon, delay }) {
  return (
    <div className={`dcb-feature dcb-feature--${id}`} style={{ animationDelay: `${delay}s` }}>
      <div className="dcb-feature-chip">
        <span className="dcb-feature-icon">
          <Icon size={20} strokeWidth={2.2} />
        </span>
        <span className="dcb-feature-text">
          <b>{label}</b>
          <small>{caption}</small>
        </span>
      </div>
    </div>
  )
}

export default function Preloader({ onDone }) {
  const [tick, setTick] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    const storyMs = reducedMotion() ? 2500 : STORY_MS
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const start = performance.now()
    let raf = 0
    const frame = (now) => {
      const p = Math.min(1, (now - start) / storyMs)
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
      if (p < 1) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const step = setInterval(() => setTick((t) => t + 1), STEP_MS)
    const leave = setTimeout(() => {
      clearInterval(step)
      setLeaving(true)
    }, storyMs)
    const done = setTimeout(() => {
      document.body.style.overflow = previousOverflow
      onDone()
    }, storyMs + EXIT_MS)

    return () => {
      cancelAnimationFrame(raf)
      clearInterval(step)
      clearTimeout(leave)
      clearTimeout(done)
      document.body.style.overflow = previousOverflow
    }
  }, [onDone])

  const slides = tick === 0 ? [0] : [tick - 1, tick]
  const current = tick % IMAGES.length
  const [accent, accent2] = ACCENTS[current]

  return (
    <div
      className={`dcb-preloader${leaving ? ' is-leaving' : ''}`}
      style={{ '--accent': accent, '--accent-2': accent2 }}
      role="status"
      aria-label="Loading nSERVE DCB products"
    >
      <div className="dcb-preloader-slides" aria-hidden="true">
        {slides.map((n) => {
          const [a, b] = ACCENTS[n % ACCENTS.length]
          return (
            <div
              key={n}
              className={`dcb-preloader-slide${n === 0 ? ' is-first' : ` from-${WIPES[n % WIPES.length]}`}`}
              style={{ '--slide-a': a, '--slide-b': b }}
            >
              <div className="dcb-preloader-panel" />
              <div className="dcb-preloader-media">
                <img src={IMAGES[n % IMAGES.length]} alt="" draggable="false" />
              </div>
            </div>
          )
        })}
      </div>
      <div className="dcb-preloader-shade" aria-hidden="true" />
      <div className="dcb-preloader-glow dcb-preloader-glow--a" aria-hidden="true" />
      <div className="dcb-preloader-glow dcb-preloader-glow--b" aria-hidden="true" />

      <div className="dcb-preloader-ribbons" aria-hidden="true">
        <Ribbon className="dcb-preloader-ribbon--back" />
        <Ribbon className="dcb-preloader-ribbon--front" />
      </div>

      <div className="dcb-preloader-features" aria-hidden="true">
        {FEATURES.map((feature) => (
          <FeatureBadge key={feature.id} {...feature} />
        ))}
      </div>

      <img className="dcb-preloader-logo" src="/nservelogo.png" alt="nSERVE" />

      <div className="dcb-preloader-title" aria-hidden="true">
        <p className="dcb-preloader-subheading" data-text={SUBTITLE}>
          {SUBTITLE}
        </p>
        <p className="dcb-preloader-heading" data-text={TITLE}>
          {TITLE.split('').map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
              {ch}
            </span>
          ))}
        </p>
        <span className="dcb-preloader-tagline">Pay with your mobile balance</span>
      </div>

      <div className="dcb-preloader-footer" aria-hidden="true">
        <ol className="dcb-preloader-dots">
          {IMAGES.map((src, i) => (
            <li key={src} className={i === current ? 'is-active' : undefined} />
          ))}
        </ol>
      </div>
      <div className="dcb-preloader-bar" aria-hidden="true">
        <span ref={barRef} />
      </div>
    </div>
  )
}
