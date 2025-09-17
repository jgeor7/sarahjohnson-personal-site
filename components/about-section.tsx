export function AboutSection() {
  const interests = [
    { icon: "☕", text: "Coffee" },
    { icon: "📸", text: "Photography" },
    { icon: "✈️", text: "Travel" },
    { icon: "💻", text: "Coding" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer and designer with over 5 years of experience creating digital experiences
              that make a difference. I believe in the power of clean, accessible design combined with robust, scalable
              code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not crafting websites, you'll find me exploring new technologies, contributing to open-source
              projects, or mentoring aspiring developers. I'm always excited to take on new challenges and collaborate
              with amazing teams.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring every project not only
              looks great but performs exceptionally well.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What I Enjoy</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">{interest.icon}</span>
                  <span className="font-medium text-card-foreground">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
