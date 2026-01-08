import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "PwC (PricewaterhouseCoopers)",
    role: "ESG Intern",
    highlights: [
      "Authored environmental chapters and visualized consumption trends for the FY'25 Annual Reports of leading Indian hospital and manufacturing firms",
      "Calculated Scope 3 emissions and developed comprehensive databooks for manufacturing clients following GHG Protocol standards",
      "Charted a Science Based Targets initiative (SBTi) Net Zero implementation roadmap for PwC's internal sustainability strategy",
      "Executed peer benchmarking, materiality assessments, and populated DJSI (S&P Global CSA) templates for pharmaceutical and automotive clients",
    ],
  },
  {
    company: "Eicher Group Foundation (Royal Enfield)",
    role: "Sustainability Intern",
    highlights: [
      "Contributed to 'SHEHAAT,' a women-led sustainable pit-stop initiative, through multilateral collaboration and SHG (Self-Help Group) training programs in Himachal Pradesh",
      "Conducted a 900+ km research expedition across the Himalayas to analyze the socio-economic and environmental impacts of rider behavior on local communities",
      "Core organizing team member for a ₹1 Cr+ annual CSR event, managing celebrity engagement and content creation for 500+ stakeholders",
    ],
  },
  {
    company: "Oren Now",
    role: "ESG Intern",
    highlights: [
      "Independently authored white papers: 'BRSR Insights for the Pharmaceutical Sector', 'BRSR Insights for the Automotive Sector', and 'BRSR Insights for the Chemical Sector'",
      "Developed a comprehensive handbook on the EU's Carbon Border Adjustment Mechanism (CBAM) and its implications for Indian exporters",
      "Performed Scope 3 GHG emissions accounting in strict compliance with the GHG Protocol using MS Excel for multiple client organizations",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card">
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
              Professional Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif">
            Experience <span className="italic text-accent">Highlights</span>
          </h2>
        </motion.div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl border border-border hover:border-accent/40 transition-all hover:shadow-md group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Briefcase className="text-primary" size={20} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-accent font-medium text-sm">{exp.role}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <ChevronRight size={14} className="text-accent mt-1 flex-shrink-0" />
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
