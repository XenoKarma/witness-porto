import { motion } from 'motion/react'
import BlurText from './BlurText'
import TextType from './TextType'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-16 px-5 md:px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/10">
              <img
                src="/profile/witness.jpeg"
                alt="Fresh Krist Wit Nesty Sarumaha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="text-center md:text-left">
          <BlurText
            text="Fresh Krist Wit Nesty Sarumaha (Witnes)"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight justify-center md:justify-start"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-4 text-base md:text-lg text-zinc-400 max-w-xl"
          >
            <TextType
              text={['Creative Digital Marketing Specialist', 'Content & Marketplace Strategist', 'Brand Engagement Strategist']}
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={2000}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              className=""
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-4 text-sm text-zinc-500 max-w-md leading-relaxed"
          >
            Building digital experiences with modern technologies, clean code, and creative design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="px-7 py-2.5 bg-white text-[#030712] rounded-full text-sm font-medium hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
            >
              Scroll Down
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="px-7 py-2.5 border border-zinc-700 text-white rounded-full text-sm font-medium hover:bg-zinc-800/50 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-zinc-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
