"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Get In Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always excited to take on new projects and collaborate with amazing people. Whether you need a new
              website, want to improve an existing one, or just want to chat about web development, I'd love to hear
              from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-primary">📧</span>
                <span>sarah.johnson@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">💼</span>
                <span>LinkedIn: /in/sarahjohnson</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">🐙</span>
                <span>GitHub: @sarahjohnson</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
