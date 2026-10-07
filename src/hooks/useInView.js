import { useEffect, useRef, useState } from 'react'

export default function useInView({ once = false, threshold = 0.25 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting && once) observer.disconnect()
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold])

  return [ref, inView]
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export function useLoop(length, interval, active) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!active) return
    const id = setInterval(() => setStep((s) => (s + 1) % length), interval)
    return () => clearInterval(id)
  }, [length, interval, active])

  return step
}

export function useTween(target, duration = 900, { animateDown = false } = {}) {
  const [value, setValue] = useState(target)
  const fromRef = useRef(target)

  useEffect(() => {
    const from = fromRef.current
    if (target === from || (target < from && !animateDown)) {
      fromRef.current = target
      setValue(target)
      return
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration))
      const next = from + (target - from) * (1 - (1 - t) ** 3)
      fromRef.current = next
      setValue(next)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, animateDown])

  return value
}
