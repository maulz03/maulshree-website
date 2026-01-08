import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "PwC (PricewaterhouseCoopers)",
    role: "ESG Intern",
    period: "Recent",
    highlights: [
      "Authored environmental chapters and visualized consumption trends for FY'25 Annual Reports of leading Indian hospital and manufacturing firms",
      "Calculated Scope 3 emissions and developed comprehensive databooks for manufacturing clients",
      "Charted Science Based Targets initiative (SBTi) Net Zero implementation roadmap for PwC",
      "Executed peer benchmarking, materiality assessments, and populated DJSI (S&P Global CSA) templates",
    ],
  },
  {
    company: "Eicher Group Foundation (Royal Enfield)",
    role: "Sustainability Intern",
    period: "Previous",
    highlights: [
      "Contributed to 'SHEHAAT,' a women-led sustainable pit-stop initiative through SHG training in Himachal Pradesh",
      "Conducted 900+ km research expedition across Himalayas analyzing socio-economic and environmental impacts",
      "Core organizing team member for ₹1 Cr+ annual CSR event, managing celebrity engagement for 500+ stakeholders",
    ],
  },
  {
    company: "Oren Now",
    role: "ESG Intern",
    period: "Previous",
    highlights: [
      "Authored white papers on BRSR insights for Pharmaceutical, Automotive, and Chemical sectors",
      "Developed handbook on EU's Carbon Border Adjustment Mechanism (CBAM)",
      "Performed Scope 3 GHG emissions accounting in compliance with GHG Protocol",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 organic-blob" />
      
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
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">
            Experience <span className="italic text-accent">Highlights</span>
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="text-primary" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-accent font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
