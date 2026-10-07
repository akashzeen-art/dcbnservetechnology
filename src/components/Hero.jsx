import { ArrowRight, Clapperboard, CreditCard, Megaphone, Smartphone, TrendingUp, Wallet } from 'lucide-react'
import CheckoutDemo from './CheckoutDemo.jsx'

const services = [
  {
    href: '#dcb',
    icon: Wallet,
    title: 'Direct Carrier Billing',
    text: 'Purchases charged to the mobile bill or prepaid SIM.',
  },
  {
    href: '#content',
    icon: Clapperboard,
    title: 'Content',
    text: 'Games, VOD, audio books & more for a global audience.',
  },
  {
    href: '#marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    text: '360º solutions that promote brands and drive conversions.',
  },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy enter-stagger">
          <p className="hero-kicker">
            <span className="hero-kicker-dot" />
            nSERVE DCB
          </p>
          <h1>
            Pay with your <span className="hero-gradient">mobile</span>. Grow with{' '}
            <span className="hero-gradient">digital</span>.
          </h1>
          <p className="hero-lead">
            Let customers buy instantly using their phone bill or prepaid balance, give them content they
            love, and reach more of them with digital marketing that drives conversions.
          </p>
          <div className="hero-services">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <a key={service.href} href={service.href} className="hero-service">
                  <span className="hero-service-icon">
                    <Icon size={20} />
                  </span>
                  <span className="hero-service-text">
                    <strong>{service.title}</strong>
                    <small>{service.text}</small>
                  </span>
                  <ArrowRight className="hero-service-arrow" size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <CheckoutDemo />
          <span className="hero-badge hero-badge--1" aria-hidden="true">
            <Smartphone size={14} /> Any mobile device
          </span>
          <span className="hero-badge hero-badge--2" aria-hidden="true">
            <CreditCard size={14} /> No card needed
          </span>
          <span className="hero-badge hero-badge--3" aria-hidden="true">
            <TrendingUp size={14} /> Higher conversions
          </span>
        </div>
      </div>
    </section>
  )
}
