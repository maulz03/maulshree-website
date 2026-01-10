import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-accent">✦</span>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Get in Touch
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Let's Build <span className="italic text-accent">Something</span>
            <br />Sustainable Together
          </h2>
          
          <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Interested in collaborating on ESG initiatives, climate research, or sustainability projects? 
            I'd love to connect and explore how we can create meaningful impact together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maulshreepant03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all group text-sm"
            >
              <Mail size={18} />
              <span>Send an Email</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all group text-sm"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
