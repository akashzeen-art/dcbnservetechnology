import { Check, CreditCard, Landmark, Smartphone } from 'lucide-react'
import useInView, { useLoop, usePrefersReducedMotion } from '../hooks/useInView.js'

const STEPS = 5

const methods = [
  { id: 'card', icon: CreditCard, label: 'Credit / debit card' },
  { id: 'bank', icon: Landmark, label: 'Net banking' },
  { id: 'mobile', icon: Smartphone, label: 'Pay with mobile bill' },
]

function Store({ selected }) {
  return (
    <div className="co-store">
      <div className="co-app">
        <span className="co-app-logo">S</span>
        <div>
          <strong>StreamPlus</strong>
          <small>Premium · 1 month</small>
        </div>
        <span className="co-price">₹99</span>
      </div>
      <p className="co-label">Choose payment</p>
      <ul className="co-methods">
        {methods.map((method) => {
          const Icon = method.icon
          const active = selected && method.id === 'mobile'
          return (
            <li key={method.id} className={`${method.id === 'mobile' ? 'is-dcb' : ''}${active ? ' is-active' : ''}`}>
              <Icon size={14} />
              {method.label}
              <span className="co-radio">{active ? <Check size={10} strokeWidth={4} /> : null}</span>
            </li>
          )
        })}
      </ul>
      <span className={`co-btn${selected ? ' is-ready' : ''}`}>Continue</span>
    </div>
  )
}

export default function CheckoutDemo() {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.3 })
  const loopStep = useLoop(STEPS, 1700, inView && !reduced)
  const step = reduced ? STEPS - 1 : loopStep

  let screen
  if (step <= 1) {
    screen = <Store selected={step === 1} />
  } else if (step === 2) {
    screen = (
      <div className="co-sheet" key="confirm">
        <span className="co-sheet-icon">
          <Smartphone size={20} />
        </span>
        <strong>Confirm payment</strong>
        <p>₹99 will be charged to</p>
        <span className="co-number">+91 98••• ••210</span>
        <small>Prepaid · your mobile operator</small>
        <span className="co-btn is-ready is-pressed">Confirm ₹99</span>
      </div>
    )
  } else if (step === 3) {
    screen = (
      <div className="co-status" key="processing">
        <span className="co-spinner" />
        <strong>Charging your mobile account…</strong>
      </div>
    )
  } else {
    screen = (
      <div className="co-status co-status--done" key="done">
        <span className="co-check">
          <Check size={26} strokeWidth={3} />
        </span>
        <strong>Payment successful</strong>
        <p>₹99 added to your mobile bill</p>
      </div>
    )
  }

  return (
    <div className="checkout" ref={ref} aria-hidden="true">
      <div className="phone">
        <span className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span className="phone-signal">
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
          {screen}
        </div>
      </div>
      <div className="checkout-steps">
        {Array.from({ length: STEPS }, (_, i) => (
          <i key={i} className={i === step ? 'is-active' : i < step ? 'is-done' : undefined} />
        ))}
      </div>
    </div>
  )
}
