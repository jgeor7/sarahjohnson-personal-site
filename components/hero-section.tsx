"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Hi, I'm <span className="text-primary">Sarah Johnson</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">Web Developer & Designer</h2>
          <p className="text-lg text-muted-foreground max-w-lg text-pretty">
            I create beautiful, functional websites that help businesses grow. With a passion for clean code and
            stunning design, I bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-8">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
            <img
              src="/professional-headshot-of-a-friendly-female-web-dev.jpg"
              alt="Sarah Johnson - Professional headshot"
              className="w-72 h-72 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
