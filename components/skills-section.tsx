export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Photoshop"],
    },
    {
      category: "Other",
      skills: ["WordPress", "Git"],
    },
  ]

  const allSkills = skillCategories.flatMap((cat) => cat.skills)

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Skills & Technologies</h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {allSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card text-card-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-3 bg-muted rounded-lg text-muted-foreground hover:bg-card hover:text-card-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
