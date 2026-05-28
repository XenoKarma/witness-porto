import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LiquidEther from './components/LiquidEther'

function App() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-[#030712]">
        <LiquidEther
          colors={['#6366f1', '#a855f7', '#ec4899']}
          resolution={0.4}
          mouseForce={15}
          cursorSize={80}
          autoSpeed={0.4}
          autoIntensity={1.8}
        />
      </div>
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Approach />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
