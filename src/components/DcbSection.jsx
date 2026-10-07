import { CircleCheck, CreditCard } from 'lucide-react'
import { dcb } from '../data/content.js'
import BillCard from './BillCard.jsx'

export default function DcbSection() {
  return (
    <section className="section" id={dcb.id} aria-labelledby="dcb-title">
      <div className="section-inner">
        <div className="intro">
          <div className="intro-copy" data-reveal>
            <p className="section-kicker">
              <span className="section-num">{dcb.number}</span>
              {dcb.kicker}
            </p>
            <h2 id="dcb-title">{dcb.title}</h2>
            <p className="intro-text">{dcb.text}</p>
            <ul className="highlights">
              {dcb.highlights.map((item) => (
                <li key={item}>
                  <CircleCheck size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="intro-visual" data-reveal="zoom">
            <BillCard />
          </div>
        </div>

        <div className="callout" data-reveal>
          <span className="callout-icon" aria-hidden="true">
            <CreditCard size={22} />
            <i />
          </span>
          <p>{dcb.setup}</p>
        </div>

        <div className="block">
          <h3 className="block-title" data-reveal>
            How it works
          </h3>
          <ol className="steps">
            {dcb.steps.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.title} className="step" data-reveal style={{ '--i': index }}>
                  <span className="step-icon">
                    <Icon size={24} />
                    <span className="step-num">{index + 1}</span>
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="block">
          <h3 className="block-title" data-reveal>
            Key benefits
          </h3>
          <div className="cards cards--three">
            {dcb.benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <article key={benefit.title} className="card" data-reveal style={{ '--i': index }}>
                  <span className="card-icon">
                    <Icon size={22} />
                  </span>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
