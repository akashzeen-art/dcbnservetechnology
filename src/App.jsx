import ContentSection from './components/ContentSection.jsx'
import DcbSection from './components/DcbSection.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MarketingSection from './components/MarketingSection.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <div className="app">
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
