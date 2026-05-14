import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Database, Layout, Smartphone, ArrowRight, Zap, Shield, Star, CheckCircle, Cpu, Cloud, Globe } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const features = [
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Fast-Paced Learning", desc: "Gain real-world experience quickly by working on live production projects." },
    { icon: <Shield className="w-6 h-6 text-emerald-500" />, title: "Industry Standard", desc: "Learn modern best practices, Git workflows, and agile methodologies." },
    { icon: <Star className="w-6 h-6 text-violet-500" />, title: "Expert Mentorship", desc: "Get 1-on-1 guidance from senior developers working at top tech companies." }
  ];

  const marqueeItems = [
    "Full Stack Web Engineering",
    "Software Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Modern Technology Ecosystem",
    "UI/UX Design",
    "Data Science",
    "Mobile App Development",
    "Cloud Architecture"
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Premium Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-300/20 dark:bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-8 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
            </span>
            Applications open for Fall 2026 Cohort
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white"
          >
            Launch Your Tech Career With <br className="hidden md:block" />
            <span className="gradient-text">TEYZIX CORE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto font-medium"
          >
            Join our elite internship program and build production-ready applications. 
            Level up your skills with real-world projects, modern ecosystems, and mentorship.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/internships" className="btn-primary w-full sm:w-auto text-lg px-8 py-3.5">
              Explore Roles <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline w-full sm:w-auto text-lg px-8 py-3.5 dark:border-white/10 dark:hover:bg-white/5 dark:text-white">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative overflow-hidden py-10 border-y border-slate-200 dark:border-white/5 bg-white/30 dark:bg-[#030014]/50 backdrop-blur-md">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--bg-main)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--bg-main)] to-transparent" />
        
        <div className="flex w-max animate-marquee space-x-8 px-4">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full shadow-sm hover:border-violet-400 dark:hover:border-violet-500 transition-colors cursor-default whitespace-nowrap"
            >
              <CheckCircle className="w-5 h-5 text-violet-500" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Why choose Teyzix Core?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We don't just give you tutorials. We give you real responsibilities and code to ship to actual users.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel p-8 hover:border-violet-400 dark:hover:border-violet-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
              <div className="w-14 h-14 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="glass-panel p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Technology Ecosystem</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">Master the modern tech stack utilized by top-tier engineering teams worldwide.</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: 'React', icon: <Layout className="w-10 h-10 text-blue-500" /> },
              { name: 'Node.js', icon: <Database className="w-10 h-10 text-green-500" /> },
              { name: 'MongoDB', icon: <Database className="w-10 h-10 text-emerald-600" /> },
              { name: 'React Native', icon: <Smartphone className="w-10 h-10 text-blue-400" /> },
              { name: 'Tailwind CSS', icon: <Code className="w-10 h-10 text-cyan-400" /> },
              { name: 'AI Models', icon: <Cpu className="w-10 h-10 text-fuchsia-500" /> },
              { name: 'Cloud', icon: <Cloud className="w-10 h-10 text-blue-600" /> },
              { name: 'Web3', icon: <Globe className="w-10 h-10 text-indigo-500" /> },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm group-hover:shadow-md group-hover:shadow-violet-500/20 group-hover:scale-110 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
