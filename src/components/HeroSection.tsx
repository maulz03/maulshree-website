import { motion } from "framer-motion";
import { ArrowDown, Leaf, Globe, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-primary/5 organic-blob" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 organic-blob-alt" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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
          </div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl organic-blob-alt relative z-10">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="text-accent text-2xl">✦</span>
                  <span className="text-sm font-medium tracking-wide uppercase opacity-80">
                    Key Highlights
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-serif font-bold">3+</div>
                    <div className="text-sm opacity-80 mt-1">Internships</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold">900+</div>
                    <div className="text-sm opacity-80 mt-1">KM Research Expedition</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold">#1</div>
                    <div className="text-sm opacity-80 mt-1">Semester Rank at TISS</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold">5+</div>
                    <div className="text-sm opacity-80 mt-1">Publications</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/20 rounded-3xl organic-blob -z-10" />
          </motion.div>
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
