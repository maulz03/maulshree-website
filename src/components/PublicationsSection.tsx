import { motion } from "framer-motion";
import { BookOpen, FileText, Mic, Youtube, Award, Users } from "lucide-react";

const publications = [
  {
    icon: BookOpen,
    type: "Book",
    title: "The Depths of My One-Dimensionality",
    description: "Published Anthology",
  },
  {
    icon: FileText,
    type: "White Paper",
    title: "Microfinancing in India",
    description: "Building Blocks for Shareholder Value and Impact at Scale (Sculpt Partners)",
  },
  {
    icon: Mic,
    type: "Article",
    title: "India's Rising Coal Demand",
    description: "Government Initiatives (Centre for Science and Environment)",
  },
  {
    icon: Youtube,
    type: "Digital Presence",
    title: "Poetry YouTube Channel",
    description: "450+ subscribers with WordPress blog",
  },
];

const achievements = [
  {
    icon: Users,
    title: "Social Media Representative",
    description: "TISS Batch of 2024-26",
  },
  {
    icon: Award,
    title: "National Recognition",
    description: "1st Prize for Parliamentary Coalitions at I-Parliament 2017",
  },
  {
    icon: Award,
    title: "Leadership",
    description: "Former President of Editorial Board at DPS Sushant Lok",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 organic-blob" />
      
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
              Thought Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">
            Publications & <span className="italic text-accent">Achievements</span>
          </h2>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 transition-all group flex items-start gap-4"
            >
              <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                <pub.icon className="text-accent" size={20} />
              </div>
              <div>
                <span className="text-xs font-medium text-accent uppercase tracking-wide">
                  {pub.type}
                </span>
                <h4 className="font-serif font-semibold text-foreground mt-1">
                  {pub.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{pub.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-serif text-center mb-8">Leadership & Recognition</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="text-center"
              >
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon size={24} />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm opacity-80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
