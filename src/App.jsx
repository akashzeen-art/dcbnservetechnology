import { useCallback, useState } from 'react'
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
