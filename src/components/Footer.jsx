import { ArrowRight, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <section className="cta" id="contact">
        <div className="cta-card" data-reveal="zoom">
          <span className="cta-icon" aria-hidden="true">
            <Sparkles size={26} />
          </span>
          <h2>Monetise with carrier billing. Engage with content. Grow with digital.</h2>
          <p>Let’s talk about launching DCB, content and digital campaigns that grow with your business.</p>
          <div className="cta-actions">
            <a href="#dcb" className="cta-btn">
              Explore DCB <ArrowRight size={16} />
            </a>
            <a href="#marketing" className="cta-btn cta-btn--ghost">
              Explore Digital Marketing <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a href="#top" className="footer-logo" aria-label="Back to top">
            <img src="/nservelogo.png" alt="nSERVE" />
          </a>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#dcb">Direct Carrier Billing</a>
            <a href="#content">Content</a>
            <a href="#marketing">Digital Marketing</a>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} nSERVE. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
