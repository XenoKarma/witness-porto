import { motion } from 'motion/react'
import ScrollReveal from './ScrollReveal'

const highlights = [
  { label: 'Admin Social Media Specialist', icon: '📱' },
  { label: 'Host Live Streaming', icon: '🎙️' },
  { label: 'Digital Marketing', icon: '📈' },
  { label: 'Content Creator', icon: '🎨' },
  { label: 'Event Organizer', icon: '📋' },
]

const paragraphs = [
  "Saya, Fresh Krist Wit Nesty Sarumaha, adalah mahasiswa akhir semester 7 Jurusan Sistem Informasi yang memiliki pengalaman di bidang administrasi, digital marketing, e commerce, dan marketplace.",
  "Saya pernah bekerja sebagai Admin Social Media Specialist dan Host Live Streaming di PT Nindi Khanda Prima, serta Admin Marketplace, Content Creator, dan Host Live di PT Jiahua. Saya juga memiliki pengalaman sebagai Digital Marketing (Social Media & E-commerce), mulai dari staff hingga supervisor, dengan fokus pada perancangan dan eksekusi strategi konten, promosi penjualan, serta peningkatan engagement dan performa penjualan di berbagai platform digital.",
  "Selain itu, saya memiliki pengalaman dalam event sebagai Event Organizer yang memperkuat kemampuan komunikasi dan interpersonal. Saya menguasai manajemen media sosial, pengelolaan marketplace, Microsoft Office, serta memiliki kemampuan desain grafis sebagai nilai tambah.",
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs text-zinc-500 tracking-widest uppercase">About</span>
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0}
            baseRotation={2}
            blurStrength={6}
            containerClassName="my-0"
            textClassName="!text-3xl !md:text-4xl !font-bold !text-white mt-3"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            Get to Know Me
          </ScrollReveal>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </div>

        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-sm md:text-base text-zinc-400 leading-[1.8]"
            >
{text}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: paragraphs.length * 0.15, duration: 0.6 }}
            className="text-sm md:text-base text-zinc-300 leading-[1.8] font-medium"
          >
            Saya siap berkontribusi secara profesional dan memberikan dampak positif di setiap kesempatan yang ada.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (paragraphs.length + 1) * 0.15 + 0.1, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {highlights.map((item) => (
            <span
              key={item.label}
              className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200 transition-colors"
            >
              {item.icon} {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
