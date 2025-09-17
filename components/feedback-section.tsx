"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feedback {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

export function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 5,
  })
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const mockFeedback: Feedback[] = [
      {
        id: "1",
        name: "Alex Chen",
        message: "Great work on the portfolio! The design is clean and professional.",
        rating: 5,
        created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: "2",
        name: "Maria Rodriguez",
        message: "Love the smooth animations and responsive design. Very impressive!",
        rating: 4,
        created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      },
    ]
    setFeedbackList(mockFeedback)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newFeedback: Feedback = {
      id: Date.now().toString(),
      name: formData.name,
      message: formData.message,
      rating: formData.rating,
      created_at: new Date().toISOString(),
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    setFeedbackList((prev) => [newFeedback, ...prev])

    // Reset form
    setFormData({ name: "", message: "", rating: 5 })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "number" ? Number.parseInt(e.target.value) : e.target.value
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? "text-amber-500" : "text-gray-400"}`}>
        ★
      </span>
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section id="feedback" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Feedback</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your feedback message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <Input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-20"
                    required
                  />
                  <div className="mt-2 flex items-center space-x-1">
                    {renderStars(formData.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">({formData.rating}/5)</span>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">What Others Are Saying</h3>

            {feedbackList.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  No feedback yet. Be the first to share your thoughts!
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {feedbackList.map((feedback) => (
                  <Card key={feedback.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lg">{feedback.name}</h4>
                        <div className="flex items-center space-x-1">{renderStars(feedback.rating)}</div>
                      </div>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{feedback.message}</p>
                      <p className="text-xs text-muted-foreground">{formatDate(feedback.created_at)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
