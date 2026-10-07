import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const links = [
  { href: '#dcb', label: 'Carrier Billing' },
  { href: '#content', label: 'Content' },
  { href: '#marketing', label: 'Digital Marketing' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="nSERVE home">
        <img src="/nservelogo.png" alt="nSERVE" />
      </a>
      <nav className="header-nav" aria-label="Sections">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="header-cta">
        Get started
        <ArrowRight size={16} />
      </a>
    </header>
  )
}
