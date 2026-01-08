import { motion } from "framer-motion";
import { ArrowDown, Leaf, Globe, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Profile Image (smaller, professional) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div className="relative max-w-[280px] mx-auto lg:mx-0">
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="ESG & Sustainability Professional"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-primary/10 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-accent text-lg">✦</span>
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">
                ESG & Sustainability Professional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
            >
              Driving <span className="italic text-accent">Climate Strategy</span>
              <br />& Corporate Sustainability
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Specializing in climate strategy and corporate reporting. With experience at 
              <span className="font-semibold text-foreground"> PwC</span>, 
              <span className="font-semibold text-foreground"> Royal Enfield (Eicher Group Foundation)</span>, and
              <span className="font-semibold text-foreground"> Oren Now</span>, 
              I bridge academic empirical research and actionable business intelligence to drive measurable environmental and social impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#experience"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg text-sm"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all text-sm"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                <Globe size={16} className="text-accent" />
                <span>Climate Action</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                <Leaf size={16} className="text-accent" />
                <span>ESG Reporting</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                <TrendingUp size={16} className="text-accent" />
                <span>SBTi Net Zero</span>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-8 pt-4 border-t border-border"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-primary">M.Sc.</div>
                <div className="text-xs text-muted-foreground">TISS Mumbai</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">ESG Internships</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Publications</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
