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
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        {/* Premium Background glow effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-300/25 rounded-full blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-300/15 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="relative text-center max-w-5xl mx-auto px-4 space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm font-semibold mb-4 shadow-lg hover:shadow-xl transition-all"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Applications open for Fall 2026 Cohort
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight"
          >
            Launch Your Tech Career With <br className="hidden md:block" />
            <span className="gradient-text">TEYZIX CORE</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Join our elite internship program and build production-ready applications.
            Level up your skills with real-world projects, modern ecosystems, and mentorship.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/internships" className="btn-primary text-lg px-8 py-4 group">
                Explore Roles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative overflow-hidden py-16 border-y border-slate-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 backdrop-blur-md">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-[var(--bg-main)] via-[var(--bg-main)] to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
        <motion.div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-[var(--bg-main)] via-[var(--bg-main)] to-transparent pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6 px-8">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-md hover:shadow-lg hover:border-emerald-400 transition-all cursor-default whitespace-nowrap"
            >
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-slate-800">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Why choose Teyzix Core?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">We don't just give you tutorials. We give you real responsibilities and code to ship to actual users.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-panel p-10 border border-slate-200 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-50 flex items-center justify-center mb-6 shadow-lg border border-slate-100"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="glass-panel p-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Our Technology Ecosystem</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg">Master the modern tech stack utilized by top-tier engineering teams worldwide.</p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { name: 'React', icon: <Layout className="w-8 h-8 text-blue-500" /> },
              { name: 'Node.js', icon: <Database className="w-8 h-8 text-green-500" /> },
              { name: 'MongoDB', icon: <Database className="w-8 h-8 text-emerald-600" /> },
              { name: 'React Native', icon: <Smartphone className="w-8 h-8 text-blue-400" /> },
              { name: 'Tailwind CSS', icon: <Code className="w-8 h-8 text-cyan-400" /> },
              { name: 'Machine Learning', icon: <Cpu className="w-8 h-8 text-purple-500" /> },
              { name: 'AI Models', icon: <Cpu className="w-8 h-8 text-fuchsia-500" /> },
              { name: 'Cloud', icon: <Cloud className="w-8 h-8 text-blue-600" /> },
              { name: 'Web3', icon: <Globe className="w-8 h-8 text-indigo-500" /> },
              { name: 'Python', icon: <Code className="w-8 h-8 text-blue-700" /> },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-md group-hover:shadow-lg group-hover:shadow-emerald-500/20 group-hover:border-emerald-400 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
