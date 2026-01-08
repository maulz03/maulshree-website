import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 organic-blob-alt" />
      
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
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">
            Education & <span className="italic text-accent">Research</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* TISS Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 organic-blob" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-foreground/10 rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <span className="text-sm font-medium opacity-80">2024 - 2026</span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-2">
                M.Sc. Environment, Climate Change & Sustainability
              </h3>
              <p className="text-lg opacity-90 mb-4">
                Tata Institute of Social Sciences (TISS), Mumbai
              </p>
              
              <div className="flex items-center gap-2 bg-accent/30 px-4 py-2 rounded-full inline-flex">
                <Award size={18} />
                <span className="font-semibold">Ranked #1</span>
                <span className="opacity-80">in Semester 1 (CGPA: 7.7/10)</span>
              </div>
            </div>
          </motion.div>

          {/* Delhi University Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 rounded-3xl relative overflow-hidden hover:border-accent/50 transition-colors"
          >
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 organic-blob-alt" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Graduated 2023</span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                B.Sc. in Life Sciences
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Hansraj College, Delhi University
              </p>
              
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full inline-flex">
                <span className="font-semibold text-foreground">CGPA: 8.14/10.0</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-serif text-center mb-8">Research & Field Projects</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Climate & Gender Research",
                description: "Applied IGVAF framework to map women's labor and intersectional agency under climate stress in Roha block",
              },
              {
                title: "Livelihood Impact Assessment",
                description: "Field Investigator evaluating economic compensation for fishing communities affected by bridge construction",
              },
              {
                title: "Conference Presentation",
                description: "Presented research on Himalayan tourism impacts at World Summit on Disaster Management 2025",
              },
            ].map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 transition-all group"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-accent font-serif font-bold">{index + 1}</span>
                </div>
                <h4 className="font-serif font-semibold text-foreground mb-2">{research.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{research.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
