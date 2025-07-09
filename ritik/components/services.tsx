"use client"

import { motion } from "framer-motion"
import { Palette, Monitor, FileText, Smartphone, Camera, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand identity design including logos, color schemes, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Modern, responsive website designs that engage users and drive conversions.",
      features: ["UI/UX Design", "Responsive Design", "Prototyping", "User Research"],
    },
    {
      icon: FileText,
      title: "Print Design",
      description: "Professional print materials from business cards to large format displays.",
      features: ["Business Cards", "Brochures", "Posters", "Packaging"],
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Intuitive mobile app interfaces designed for optimal user experience.",
      features: ["App UI Design", "Icon Design", "User Flow", "Wireframing"],
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for products, portraits, and events.",
      features: ["Product Photos", "Portraits", "Event Coverage", "Photo Editing"],
    },
    {
      icon: Zap,
      title: "Creative Direction",
      description: "Strategic creative direction for campaigns and brand communications.",
      features: ["Campaign Strategy", "Art Direction", "Creative Concepts", "Brand Positioning"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive design services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
