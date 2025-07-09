import HeroGeometric from "@/components/hero-geometric"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="bg-[#030303]">
      <Navigation />
      <section id="home">
        <HeroGeometric badge="Graphic Designer" title1="Elevate Your" title2="Digital Vision with Ritik" />
      </section>
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  )
}
