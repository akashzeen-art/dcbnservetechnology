import { useCallback, useEffect, useState } from 'react'
import ContentSection from './components/ContentSection.jsx'
import DcbSection from './components/DcbSection.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MarketingSection from './components/MarketingSection.jsx'
import Preloader from './components/Preloader.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  const [booting, setBooting] = useState(true)
  const finishBoot = useCallback(() => setBooting(false), [])

  // Pages restored from the back/forward cache keep their old state, so replay the preloader.
  useEffect(() => {
    const onPageShow = (event) => {
      if (event.persisted) setBooting(true)
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  useScrollReveal()

  return (
    <div className="app">
      {booting && <Preloader onDone={finishBoot} />}
      <Header />
      <main>
        <Hero />
        <DcbSection />
        <ContentSection />
        <MarketingSection />
      </main>
      <Footer />
    </div>
  )
}
