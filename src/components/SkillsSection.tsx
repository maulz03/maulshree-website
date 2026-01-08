import { motion } from "framer-motion";
import { FileText, BarChart3, Wrench, Search } from "lucide-react";

const skillCategories = [
  {
    icon: FileText,
    title: "Reporting Frameworks",
    skills: ["BRSR", "GRI", "DJSI (S&P Global CSA)", "SBTi Net Zero Guidance"],
  },
  {
    icon: BarChart3,
    title: "Technical ESG",
    skills: ["GHG Accounting (Scope 1, 2, 3)", "Life Cycle Assessment (LCA)", "Vulnerability Assessment"],
  },
  {
    icon: Wrench,
    title: "Tools & Analytics",
    skills: ["QGIS", "MS Office Suite", "Advanced Excel", "Canva"],
  },
  {
    icon: Search,
    title: "Research",
    skills: ["Qualitative Methods", "Quantitative Methods", "Academic Writing", "M&E"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/10 organic-blob" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-primary/5 organic-blob-alt" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-accent">✦</span>
            <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">
            Core <span className="italic text-accent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-2xl border border-border hover:border-accent/50 transition-all group"
            >
              <div className="p-4 bg-primary/10 rounded-xl inline-flex mb-6 group-hover:bg-accent/20 transition-colors">
                <category.icon className="text-primary" size={24} />
              </div>
              
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 overflow-hidden"
        >
          <div className="bg-primary text-primary-foreground py-4 -mx-6">
            <div className="animate-marquee whitespace-nowrap flex">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  <span className="text-lg font-serif">Climate Action</span>
                  <span className="text-accent">✦</span>
                  <span className="text-lg font-serif italic">ESG Strategy</span>
                  <span className="text-accent">✦</span>
                  <span className="text-lg font-serif">Sustainability</span>
                  <span className="text-accent">✦</span>
                  <span className="text-lg font-serif italic">Net Zero</span>
                  <span className="text-accent">✦</span>
                  <span className="text-lg font-serif">Impact</span>
                  <span className="text-accent">✦</span>
                  <span className="text-lg font-serif italic">Innovation</span>
                  <span className="text-accent">✦</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
