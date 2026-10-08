import { useState } from 'react'
import { CircleCheck, Gift, Play, WifiOff } from 'lucide-react'
import { nonData } from '../data/content.js'
import UssdDemo from './UssdDemo.jsx'

export default function NonDataProducts() {
  const [videoId, setVideoId] = useState(nonData.videos[0].id)
  const video = nonData.videos.find((item) => item.id === videoId)
  const { product } = nonData

  return (
    <div className="nondata">
      <div className="callout" data-reveal>
        <span className="callout-icon" aria-hidden="true">
          <WifiOff size={24} />
        </span>
        <div>
          <h3 className="callout-title">{nonData.title}</h3>
          <p>{nonData.text}</p>
          <ul className="callout-tags">
            {nonData.tags.map((tag) => (
              <li key={tag}>
                <CircleCheck size={14} />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="nondata-showcase">
        <div className="nondata-video" data-reveal>
          <div className="video-tabs" role="tablist" aria-label="Product videos">
            {nonData.videos.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === videoId}
                className={item.id === videoId ? 'is-active' : undefined}
                onClick={() => setVideoId(item.id)}
              >
                <Play size={14} />
                {item.label}
                <span>{item.code}</span>
              </button>
            ))}
          </div>
          <div className="video-frame">
            <video
              key={video.src}
              src={`${video.src}#t=0.5`}
              controls
              controlsList="nodownload"
              playsInline
              preload="metadata"
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </div>

        <div className="nondata-demo" data-reveal="zoom">
          <UssdDemo />
        </div>
      </div>

      <div className="ginnie">
        <div className="ginnie-head" data-reveal>
          <span className="ginnie-code">{product.code}</span>
          <div>
            <h4>{product.name}</h4>
            <p>{product.text}</p>
          </div>
        </div>

        <ol className="journey">
          {nonData.journey.map((step, index) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="journey-step" data-reveal style={{ '--i': index % 4 }}>
                <span className="journey-icon">
                  <Icon size={20} />
                  <span className="journey-num">{index + 1}</span>
                </span>
                <h5>{step.title}</h5>
                <p>{step.text}</p>
              </li>
            )
          })}
        </ol>

        <div className="ginnie-extras">
          <div className="ginnie-card" data-reveal>
            <h5>
              <Gift size={18} />
              Rewards &amp; gratification
            </h5>
            <ul className="reward-chips">
              {nonData.rewards.map((reward, index) => (
                <li key={reward} style={{ '--i': index }}>
                  {reward}
                </li>
              ))}
            </ul>
          </div>
          <div className="ginnie-card" data-reveal style={{ '--i': 1 }}>
            <h5>Built for every market</h5>
            <ul className="custom-list">
              {nonData.custom.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.title}>
                    <Icon size={16} />
                    {item.title}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
