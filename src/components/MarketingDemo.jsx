import { Eye, Heart, Mail, Monitor, MousePointerClick, Search, Share2, TrendingUp } from 'lucide-react'
import useInView, { useLoop, usePrefersReducedMotion, useTween } from '../hooks/useInView.js'

const channels = [
  {
    id: 'social',
    icon: Share2,
    label: 'Social',
    bars: [38, 52, 46, 64, 58, 78, 92],
    reach: 1284000,
    engagement: 49200,
    conversions: 6360,
  },
  {
    id: 'search',
    icon: Search,
    label: 'Search',
    bars: [44, 48, 60, 56, 70, 82, 88],
    reach: 1062000,
    engagement: 37800,
    conversions: 9440,
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    bars: [30, 42, 40, 55, 50, 62, 74],
    reach: 1008000,
    engagement: 42600,
    conversions: 5280,
  },
  {
    id: 'web',
    icon: Monitor,
    label: 'Web',
    bars: [50, 46, 58, 66, 62, 76, 84],
    reach: 1127000,
    engagement: 32800,
    conversions: 7900,
  },
]

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

function Kpi({ icon: Icon, label, value }) {
  const shown = useTween(value, 900, { animateDown: true })
  return (
    <div className="kpi">
      <span className="kpi-icon">
        <Icon size={14} />
      </span>
      <small>{label}</small>
      <strong>{Math.round(shown).toLocaleString('en-US')}</strong>
    </div>
  )
}

export default function MarketingDemo() {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.3 })
  const step = useLoop(channels.length, 2200, inView && !reduced)
  const channel = channels[step]

  return (
    <div className="dash" ref={ref} aria-hidden="true">
      <div className="dash-head">
        <div>
          <strong>Campaign performance</strong>
          <small>Last 7 days</small>
        </div>
        <span className="dash-trend">
          <TrendingUp size={14} /> +32%
        </span>
      </div>

      <div className="dash-tabs">
        {channels.map((item) => {
          const Icon = item.icon
          return (
            <span key={item.id} className={item.id === channel.id ? 'is-active' : undefined}>
              <Icon size={13} />
              {item.label}
            </span>
          )
        })}
      </div>

      <div className="dash-chart">
        {channel.bars.map((height, index) => (
          <div key={index} className="dash-bar">
            <span style={{ height: `${height}%`, transitionDelay: `${index * 50}ms` }} />
            <small>{DAYS[index]}</small>
          </div>
        ))}
      </div>

      <div className="dash-kpis">
        <Kpi icon={Eye} label="Reach" value={channel.reach} />
        <Kpi icon={Heart} label="Engagement" value={channel.engagement} />
        <Kpi icon={MousePointerClick} label="Conversions" value={channel.conversions} />
      </div>
    </div>
  )
}
