"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">Sarah Johnson</div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <Button onClick={() => scrollToSection("contact")} className="hidden md:inline-flex">
          Get In Touch
        </Button>
      </nav>
    </header>
  )
}
