"use client"
import ritik from "@/public/about.jpg"
import { motion } from "framer-motion"
import { Award, Users, Coffee, Lightbulb } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "30+", label: "Happy Clients" },
    { icon: Coffee, number: "1000+", label: "Cups of Coffee" },
    { icon: Lightbulb, number: "5+", label: "Years Experience" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">Ritik</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-indigo-500/20 to-rose-500/20 rounded-2xl overflow-hidden">
                <img
                  src={ritik.src}
                  alt="Ritik - Graphic Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-full opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">Passionate Visual Storyteller</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              I'm Ritik, a passionate graphic designer with over 5 years of experience in creating compelling visual
              narratives. I specialize in brand identity, digital design, and creative solutions that help businesses
              stand out in today's competitive landscape.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              My approach combines strategic thinking with creative execution, ensuring every design not only looks
              stunning but also serves its intended purpose effectively.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
