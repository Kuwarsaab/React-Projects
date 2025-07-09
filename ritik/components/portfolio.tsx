"use client"

import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import { useState } from "react"
import logo from "@/public/logo.jpg"
import commerce from "@/public/commerce.jpg"
import magazine from "@/public/pexels-alexquezada-27206737.jpg"
import illust from "@/public/illust.jpg"
import portfolio from "@/public/portfolio.jpg"
import restraurant from "@/public/restraurant.jpg"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Branding", "Web Design", "Print", "Illustration"]

  const projects = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "Branding",
      image: logo.src,
      description: "Complete brand identity design for a tech startup",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "Web Design",
      image: commerce.src,
      description: "Responsive e-commerce platform design",
    },
    {
      id: 3,
      title: "Magazine Layout",
      category: "Print",
      image: magazine.src,
      description: "Editorial design for lifestyle magazine",
    },
    {
      id: 4,
      title: "Digital Illustration",
      category: "Illustration",
      image: illust.src,
      description: "Custom illustrations for mobile app",
    },
    {
      id: 5,
      title: "Restaurant Branding",
      category: "Branding",
      image: restraurant.src,
      description: "Complete visual identity for restaurant chain",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web Design",
      image: portfolio.src,
      description: "Personal portfolio website design",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.02] to-transparent" />

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400">
              Portfolio
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-indigo-500 mx-auto mb-8" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative projects that showcase my passion for design
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white"
                  : "bg-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.1]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
