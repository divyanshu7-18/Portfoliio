import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  { name: "C++", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },

  { name: "React.js", level: 85, category: "web" },
  { name: "Firebase", level: 60, category: "web" },
  { name: "Vite", level: 55, category: "web" },
  { name: "MySQL", level: 75, category: "web" },

  { name: "TensorFlow", level: 75, category: "ai" },
  { name: "OpenCV", level: 80, category: "ai" },
  { name: "Machine Learning", level: 70, category: "ai" },
  { name: "Deep Learning", level: 70, category: "ai" },

  { name: "Data Structures & Algorithms", level: 70, category: "core" },
];

const categories = ["all", "languages", "web", "ai", "core"];

const getLevelLabel = (level) => {
  if (level >= 85) return "Advanced";
  if (level >= 75) return "Intermediate";
  return "Basic";
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-md p-6 rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>

                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {getLevelLabel(skill.level)}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-primary to-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};