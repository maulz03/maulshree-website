import { motion } from "framer-motion";
import { BookOpen, FileText, Mic, Youtube, Award, Users } from "lucide-react";

const publications = [
  {
    icon: BookOpen,
    type: "Published Book",
    title: "The Depths of My One-Dimensionality",
    description: "Published poetry anthology exploring themes of identity, existence, and human experience",
  },
  {
    icon: FileText,
    type: "White Paper",
    title: "Microfinancing in India: Building Blocks for Shareholder Value and Impact at Scale",
    description: "Research paper published with Sculpt Partners on microfinance sector analysis",
  },
  {
    icon: Mic,
    type: "Article",
    title: "India's Rising Coal Demand and Government Initiatives",
    description: "Wrote for Centre for Science and Environment (CSE) analyzing energy policy",
  },
  {
    icon: Youtube,
    type: "Digital Presence",
    title: "Poetry YouTube Channel & WordPress Blog",
    description: "YouTube channel with 450+ subscribers featuring original poetry; complementary WordPress blog",
  },
];

const achievements = [
  {
    icon: Users,
    title: "Social Media Representative",
    description: "Appointed for TISS Batch of 2024-26",
  },
  {
    icon: Award,
    title: "I-Parliament 2017 Winner",
    description: "1st Prize for building Parliamentary Coalitions, awarded by Smt. Sonia Gandhi",
  },
  {
    icon: Award,
    title: "Editorial Board President",
    description: "Former President of Editorial Board & Member of Environmental Committee at DPS Sushant Lok",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding">
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
              Thought Leadership
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif">
            Publications & <span className="italic text-accent">Achievements</span>
          </h2>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border p-5 rounded-xl hover:border-accent/40 transition-all group flex items-start gap-3"
            >
              <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors flex-shrink-0">
                <pub.icon className="text-accent" size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold text-accent uppercase tracking-wide">
                  {pub.type}
                </span>
                <h4 className="font-serif font-semibold text-foreground text-sm mt-0.5 leading-snug">
                  {pub.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{pub.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary text-primary-foreground p-6 md:p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-serif text-center mb-6">Leadership & Recognition</h3>
          
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="text-center">
                <div className="w-10 h-10 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <achievement.icon size={20} />
                </div>
                <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs opacity-80 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
