import { motion } from "framer-motion";
import { GraduationCap, MapPin, ChevronRight } from "lucide-react";

const researchProjects = [
  {
    title: "Climate & Gender Vulnerability Research",
    description: "Applied the Integrated Gendered Vulnerability and Agency Framework (IGVAF) to map women's labor patterns and intersectional agency under climate stress conditions in Roha block, Maharashtra",
  },
  {
    title: "Livelihood Impact Assessment - Vashi Gaon",
    description: "Served as Field Investigator evaluating economic compensation mechanisms for fishing communities affected by bridge construction (ongoing Bombay High Court case)",
  },
  {
    title: "World Summit on Disaster Management 2025",
    description: "Presented research paper on Himalayan tourism impacts, disaster preparedness, and community resilience at the international conference",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
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
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif">
            Education & <span className="italic text-accent">Research</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10">
          {/* TISS Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <GraduationCap size={20} />
              </div>
              <span className="text-sm font-medium opacity-80">2024 - 2026</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold mb-1">
              M.Sc. Environment, Climate Change & Sustainability Studies
            </h3>
            <div className="flex items-center gap-1 text-sm opacity-90 mb-3">
              <MapPin size={14} />
              <span>Tata Institute of Social Sciences (TISS), Mumbai</span>
            </div>
            <p className="text-sm opacity-80">
              CGPA: 7.7/10.0 (Semester 1)
            </p>
          </motion.div>

          {/* Delhi University Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-6 rounded-xl hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Graduated 2023</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-foreground mb-1">
              B.Sc. in Life Sciences
            </h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <MapPin size={14} />
              <span>Hansraj College, Delhi University</span>
            </div>
            <p className="text-sm text-muted-foreground">
              CGPA: 8.14/10.0
            </p>
          </motion.div>
        </div>

        {/* Research Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-serif text-center mb-6">Research & Field Projects</h3>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {researchProjects.map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border p-5 rounded-xl hover:border-accent/40 transition-all group"
              >
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-accent/30 transition-colors">
                  <span className="text-accent font-serif font-bold text-sm">{index + 1}</span>
                </div>
                <h4 className="font-serif font-semibold text-foreground mb-2 text-sm">{research.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{research.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
