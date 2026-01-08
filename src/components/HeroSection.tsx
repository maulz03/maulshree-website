import { motion } from "framer-motion";
import { ArrowDown, Leaf, Globe, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-primary/5 organic-blob" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 organic-blob-alt" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Main image container with organic shape */}
              <div className="relative z-10 overflow-hidden organic-blob-alt bg-primary p-2">
                <img
                  src={profilePhoto}
                  alt="Maulshree - ESG & Sustainability Professional"
                  className="w-full h-auto organic-blob-alt object-cover aspect-[3/4]"
                />
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/30 organic-blob -z-10" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg z-20"
              >
                <span className="font-serif font-semibold">TISS Mumbai</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="text-accent">✦</span>
              <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                ESG & Sustainability Professional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
            >
              Driving <span className="italic text-accent">Climate Strategy</span>
              <br />
              <span className="text-primary">WITH PURPOSE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Bridging academic empirical research and actionable business intelligence 
              to drive measurable environmental and social impact. Experience at 
              <span className="font-semibold text-foreground"> PwC</span> and 
              <span className="font-semibold text-foreground"> Royal Enfield</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#experience"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe size={18} className="text-accent" />
                <span>Climate Action</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf size={18} className="text-accent" />
                <span>ESG Reporting</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp size={18} className="text-accent" />
                <span>SBTi</span>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-6 border-t border-border"
            >
              <div>
                <div className="text-3xl font-serif font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-primary">900+</div>
                <div className="text-sm text-muted-foreground">KM Research</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-primary">#1</div>
                <div className="text-sm text-muted-foreground">Semester Rank</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
