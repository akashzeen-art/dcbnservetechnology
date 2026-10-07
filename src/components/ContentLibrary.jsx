import { Play, RefreshCw } from 'lucide-react'
import { content } from '../data/content.js'
import useInView, { useLoop, usePrefersReducedMotion } from '../hooks/useInView.js'

const TRENDING = {
  'Audio Books': 'The Midnight Library · Chapter 4',
  'Global Content': 'World Stories · Episode 12',
  'VOD (Video On Demand)': 'City Lights · Season 2',
  'HD Games': 'Turbo Racer HD · New track',
  Contest: 'Weekly Quiz · Win prizes',
  'Health and Fitness': '15-min Morning Yoga',
}

export default function ContentLibrary() {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.3 })
  const step = useLoop(content.categories.length, 1800, inView && !reduced)
  const active = content.categories[step]

  return (
    <div className="library" ref={ref} aria-hidden="true">
      <div className="library-head">
        <div>
          <strong>Content library</strong>
          <small>{content.categories.length} categories · global rights</small>
        </div>
        <span className="library-sync" key={step}>
          <RefreshCw size={13} />
          Updated just now
        </span>
      </div>

      <div className="library-grid">
        {content.categories.map((category, index) => {
          const Icon = category.icon
          const isActive = index === step
          return (
            <div
              key={category.title}
              className={`library-tile${isActive ? ' is-active' : ''}`}
              style={{ '--t': index }}
            >
              <Icon size={22} strokeWidth={1.8} />
              <span>{category.short ?? category.title}</span>
              {isActive ? <em>New</em> : null}
            </div>
          )
        })}
      </div>

      <div className="library-now" key={active.title}>
        <span className="library-play">
          <Play size={14} fill="currentColor" />
        </span>
        <div>
          <small>Trending now</small>
          <strong>{TRENDING[active.title]}</strong>
        </div>
        <span className="library-progress">
          <i />
        </span>
      </div>
    </div>
  )
}
