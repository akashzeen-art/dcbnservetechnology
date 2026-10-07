import { RefreshCw } from 'lucide-react'
import { content } from '../data/content.js'
import ContentLibrary from './ContentLibrary.jsx'

export default function ContentSection() {
  return (
    <section className="section section--tint" id={content.id} aria-labelledby="content-title">
      <div className="section-inner">
        <div className="intro intro--reverse">
          <div className="intro-copy" data-reveal>
            <p className="section-kicker">
              <span className="section-num">{content.number}</span>
              {content.kicker}
            </p>
            <h2 id="content-title">{content.title}</h2>
            <p className="intro-text">{content.text}</p>
            <p className="intro-extra">{content.extra}</p>
          </div>
          <div className="intro-visual" data-reveal="zoom">
            <ContentLibrary />
          </div>
        </div>

        <div className="block">
          <h3 className="block-title" data-reveal>
            Content categories
          </h3>
          <div className="categories">
            {content.categories.map((category, index) => {
              const Icon = category.icon
              return (
                <article key={category.title} className="category" data-reveal style={{ '--i': index % 3 }}>
                  <span className="category-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4>{category.title}</h4>
                    <p>{category.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="updates" data-reveal>
          <span className="updates-icon" aria-hidden="true">
            <RefreshCw size={28} />
          </span>
          <div>
            <h3>{content.updates.title}</h3>
            <p>{content.updates.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
