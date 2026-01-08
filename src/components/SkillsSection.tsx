import { motion } from "framer-motion";
import { FileText, BarChart3, Wrench, Search } from "lucide-react";

const skillCategories = [
  {
    icon: FileText,
    title: "Reporting Frameworks",
    skills: ["BRSR (Business Responsibility & Sustainability Reporting)", "GRI Standards", "DJSI / S&P Global CSA", "SBTi Net Zero Guidance"],
  },
  {
    icon: BarChart3,
    title: "Technical ESG",
    skills: ["GHG Accounting (Scope 1, 2, 3)", "Life Cycle Assessment (LCA)", "Climate Vulnerability Assessment", "Materiality Assessment"],
  },
  {
    icon: Wrench,
    title: "Tools & Analytics",
    skills: ["QGIS (Spatial Analysis)", "MS Excel (Advanced Data Visualization)", "Canva (Design)", "Academic Research Tools"],
  },
  {
    icon: Search,
    title: "Research Methods",
    skills: ["Qualitative Research", "Quantitative Analysis", "Academic Writing", "Monitoring & Evaluation (M&E)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-accent">✦</span>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif">
            Core <span className="italic text-accent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background p-5 rounded-xl border border-border hover:border-accent/40 transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:bg-accent/20 transition-colors">
                <category.icon className="text-primary" size={20} />
              </div>
              
              <h3 className="font-serif font-semibold text-base text-foreground mb-3">
                {category.title}
              </h3>
              
              <ul className="space-y-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 overflow-hidden"
        >
          <div className="bg-primary text-primary-foreground py-3 -mx-6">
            <div className="animate-marquee whitespace-nowrap flex">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 mx-4">
                  <span className="text-sm font-serif">Climate Action</span>
                  <span className="text-accent">✦</span>
                  <span className="text-sm font-serif italic">ESG Strategy</span>
                  <span className="text-accent">✦</span>
                  <span className="text-sm font-serif">Sustainability</span>
                  <span className="text-accent">✦</span>
                  <span className="text-sm font-serif italic">Net Zero</span>
                  <span className="text-accent">✦</span>
                  <span className="text-sm font-serif">Impact</span>
                  <span className="text-accent">✦</span>
                  <span className="text-sm font-serif italic">Innovation</span>
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
