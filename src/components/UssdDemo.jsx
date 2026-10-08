import { Gift, Phone, Signal } from 'lucide-react'
import useInView, { useLoop, usePrefersReducedMotion } from '../hooks/useInView.js'

const screens = [
  { label: 'Dial', dial: '*786#' },
  {
    label: 'Menu',
    head: 'Welcome to AI Ginnie',
    lines: ['1. Health', '2. Wellness', '3. Education', '4. Relationships', '5. Lifestyle', '6. More'],
    active: 0,
    reply: '1',
  },
  { label: 'Ask', head: 'Health · Ask Ginnie', lines: ['Type your question:'], reply: 'Headache after long screen time?' },
  {
    label: 'Answer',
    head: 'AI Ginnie',
    lines: ['Rest your eyes every 20 minutes, drink water and keep a good posture. See a doctor if it continues.'],
  },
  { label: 'Plan', head: 'Choose your plan', lines: ['1. Daily', '2. Weekly', '3. Monthly'], active: 1, reply: '2' },
  {
    label: 'Active',
    head: 'Subscription active',
    lines: ['AI Ginnie Weekly is on. Billed by your operator.'],
    reward: 'Bonus: 100 MB data',
  },
]

export default function UssdDemo() {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const step = useLoop(screens.length, 2800, inView && !reduced)
  const current = reduced ? 1 : step
  const screen = screens[current]

  return (
    <div ref={ref} className="ussd" role="img" aria-label="AI Ginnie working over USSD on a mobile phone">
      <div className="ussd-phone">
        <div className="ussd-screen">
          <div className="ussd-status" aria-hidden="true">
            <Signal size={12} />
            <span>No data</span>
            <span>9:41</span>
          </div>

          {screen.dial ? (
            <div key={current} className="ussd-dial">
              <span className="ussd-code">{screen.dial}</span>
              <span className="ussd-call">
                <Phone size={18} />
              </span>
              <small>Connecting to AI Ginnie…</small>
            </div>
          ) : (
            <div key={current} className="ussd-dialog">
              <p className="ussd-head">{screen.head}</p>
              <ul>
                {screen.lines.map((line, index) => (
                  <li key={line} className={index === screen.active ? 'is-active' : undefined}>
                    {line}
                  </li>
                ))}
              </ul>
              {screen.reward && (
                <span className="ussd-reward">
                  <Gift size={14} />
                  {screen.reward}
                </span>
              )}
              {screen.reply && <span className="ussd-reply">{screen.reply}</span>}
              <div className="ussd-actions">
                <span>Cancel</span>
                <span>{screen.reward ? 'OK' : 'Send'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <ol className="ussd-steps" aria-hidden="true">
        {screens.map((item, index) => (
          <li key={item.label} className={index === current ? 'is-active' : undefined}>
            {item.label}
          </li>
        ))}
      </ol>
    </div>
  )
}
