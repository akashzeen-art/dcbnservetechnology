import { Receipt, Smartphone } from 'lucide-react'
import useInView, { useLoop, usePrefersReducedMotion, useTween } from '../hooks/useInView.js'

const lines = [
  { label: 'Monthly plan', sub: 'Unlimited calls · 2 GB/day', amount: 399 },
  { label: 'StreamPlus Premium', sub: 'Paid via Direct Carrier Billing', amount: 99, dcb: true },
  { label: 'Game credits', sub: 'Paid via Direct Carrier Billing', amount: 49, dcb: true },
]

const STEPS = 4

export default function BillCard() {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.3 })
  const loopStep = useLoop(STEPS, 1800, inView && !reduced)
  const step = reduced ? STEPS - 1 : loopStep
  const visible = lines.slice(0, Math.min(lines.length, step + 1))
  const total = useTween(visible.reduce((sum, line) => sum + line.amount, 0))

  return (
    <div className="bill" ref={ref} aria-hidden="true">
      <div className="bill-head">
        <span className="bill-icon">
          <Receipt size={18} />
        </span>
        <div>
          <strong>Your mobile bill</strong>
          <small>+91 98••• ••210 · October</small>
        </div>
        <span className="bill-live">
          <i /> Live
        </span>
      </div>

      <ul className="bill-lines">
        {visible.map((line) => (
          <li key={line.label} className={line.dcb ? 'is-dcb' : undefined}>
            <span className="bill-line-icon">
              <Smartphone size={14} />
            </span>
            <span className="bill-line-text">
              <strong>{line.label}</strong>
              <small>{line.sub}</small>
            </span>
            <span className="bill-amount">₹{line.amount}</span>
          </li>
        ))}
      </ul>

      <div className="bill-total">
        <span>Total due</span>
        <strong>₹{Math.round(total)}</strong>
      </div>
      <p className="bill-note">No card, no bank details. Just the mobile number.</p>
    </div>
  )
}
