import { useEffect, useRef, useState } from 'react'
import { Globe2, RadioTower } from 'lucide-react'

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
// Top and bottom come last so they sit over the corners where the side strips overlap them.
const EDGES = ['left', 'right', 'top', 'bottom']
const STEP_MS = 650
const STORY_MS = 4300
const EXIT_MS = 700
const TITLE = 'Products'
const SUBTITLE = 'Direct Carrier Billing'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Ribbon({ edge }) {
  const items = [...RIBBON, ...RIBBON, ...RIBBON, ...RIBBON]
  return (
    <div className={`dcb-preloader-ribbon dcb-preloader-ribbon--${edge}`}>
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

function StatCard({ side, Icon, pre, value, label }) {
  return (
    <div className={`dcb-stat dcb-stat--${side}`} aria-hidden="true">
      <span className="dcb-stat-icon">
        <Icon size={20} strokeWidth={2.2} />
      </span>
      {pre && <span className="dcb-stat-pre">{pre}</span>}
      <strong className="dcb-stat-num">{value}</strong>
      <span className="dcb-stat-label">{label}</span>
    </div>
  )
}

export default function Preloader({ onDone }) {
  const [tick, setTick] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [onScreen, setOnScreen] = useState(() => document.visibilityState === 'visible')
  const barRef = useRef(null)

  // Safari can load a page before it is shown (top-hit preloading, background tabs);
  // the story must not start until then or it finishes unseen.
  useEffect(() => {
    if (onScreen) return
    const onVisibility = () => {
      if (document.visibilityState === 'visible') setOnScreen(true)
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [onScreen])

  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (!onScreen) return

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
  }, [onDone, onScreen])

  if (!onScreen) return <div className="dcb-preloader" aria-hidden="true" />

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
        {EDGES.map((edge) => (
          <Ribbon key={edge} edge={edge} />
        ))}
      </div>

      <StatCard side="left" Icon={Globe2} pre="in over" value="22" label="Countries" />
      <StatCard side="right" Icon={RadioTower} value="28" label="Telcos" />

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
