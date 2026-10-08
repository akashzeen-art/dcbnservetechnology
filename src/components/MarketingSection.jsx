import { ArrowRight } from 'lucide-react'
import { marketing } from '../data/content.js'
import useInView, { usePrefersReducedMotion, useTween } from '../hooks/useInView.js'
import MarketingDemo from './MarketingDemo.jsx'

function WhyChoose() {
  const { why } = marketing
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ once: true, threshold: 0.4 })
  const years = useTween(inView || reduced ? why.stat.value : 0, 1600)

  return (
    <div className="why" ref={ref} data-reveal="zoom">
      <div className="why-stat">
        <strong>
          {Math.round(years)}
          {why.stat.suffix}
        </strong>
        <span>{why.stat.label}</span>
      </div>
      <div className="why-body">
        <h3>{why.title}</h3>
        <ul>
          {why.points.map((point) => {
            const Icon = point.icon
            return (
              <li key={point.text}>
                <span className="why-icon">
                  <Icon size={18} />
                </span>
                {point.text}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default function MarketingSection() {
  return (
    <section className="section" id={marketing.id} aria-labelledby="marketing-title">
      <div className="section-inner">
        <div className="intro">
          <div className="intro-copy" data-reveal>
            <p className="section-kicker">
              <span className="section-num">{marketing.number}</span>
              {marketing.kicker}
            </p>
            <h2 id="marketing-title">{marketing.title}</h2>
            <p className="intro-text">{marketing.text}</p>
            <p className="intro-extra">{marketing.extra}</p>
            <ol className="outcomes">
              {marketing.outcomes.map((outcome, index) => {
                const Icon = outcome.icon
                return (
                  <li key={outcome.title}>
                    <span className="outcome-icon">
                      <Icon size={16} />
                    </span>
                    {outcome.title}
                    {index < marketing.outcomes.length - 1 ? (
                      <ArrowRight className="outcome-arrow" size={14} aria-hidden="true" />
                    ) : null}
                  </li>
                )
              })}
            </ol>
          </div>
          <div className="intro-visual" data-reveal="zoom">
            <MarketingDemo />
          </div>
        </div>

        <div className="block">
          <h3 className="block-title" data-reveal>
            Our solutions
          </h3>
          <div className="solutions">
            {marketing.solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <article key={solution.title} className="solution" data-reveal style={{ '--i': index % 3 }}>
                  <span className="solution-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="card-icon">
                    <Icon size={22} />
                  </span>
                  <h4>{solution.title}</h4>
                  <p>{solution.text}</p>
                  {solution.platforms && (
                    <ul className="solution-platforms">
                      {solution.platforms.map((platform) => (
                        <li key={platform}>{platform}</li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </div>

        <div className="block">
          <WhyChoose />
        </div>
      </div>
    </section>
  )
}
