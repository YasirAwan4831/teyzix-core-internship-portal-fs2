import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MapPin, Clock, Briefcase, ChevronRight, AlertCircle, Code, Layout, Smartphone, Database, Terminal, LineChart, Cpu, Brain, PenTool, TrendingUp, Image as ImageIcon, Binary } from 'lucide-react';

const getIconForDomain = (domain) => {
  const icons = {
    'Full Stack Web Development': <Code className="w-5 h-5 text-violet-500" />,
    'Mobile App Development': <Smartphone className="w-5 h-5 text-blue-500" />,
    'Frontend Development': <Layout className="w-5 h-5 text-cyan-500" />,
    'Backend Development': <Database className="w-5 h-5 text-green-500" />,
    'Python Development': <Terminal className="w-5 h-5 text-yellow-500" />,
    'Data Analytics': <LineChart className="w-5 h-5 text-blue-400" />,
    'Data Science': <Cpu className="w-5 h-5 text-emerald-500" />,
    'Artificial Intelligence': <Brain className="w-5 h-5 text-fuchsia-500" />,
    'Machine Learning': <Brain className="w-5 h-5 text-rose-500" />,
    'UI/UX Design': <PenTool className="w-5 h-5 text-pink-500" />,
    'Digital Marketing': <TrendingUp className="w-5 h-5 text-orange-500" />,
    'Graphic Designing': <ImageIcon className="w-5 h-5 text-indigo-500" />,
    'C/C++ Programming': <Binary className="w-5 h-5 text-slate-500" />,
  };
  return icons[domain] || <Briefcase className="w-5 h-5 text-violet-500" />;
};

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/internships');
        setInternships(data);
        setLoading(false);
      } catch (err) {
        setError(err.response && err.response.data.message ? err.response.data.message : err.message);
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-violet-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Failed to load internships</h2>
        <p className="text-slate-600 dark:text-slate-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-6 shadow-sm"
        >
          Explore Opportunities
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">Available Positions</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          Discover your next big opportunity. We're looking for passionate individuals ready to build the future across multiple technology domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((job, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={job._id}
            className="glass-panel p-6 group hover:border-violet-400 dark:hover:border-violet-500/50 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm border border-slate-100 dark:border-white/10 shrink-0">
                {getIconForDomain(job.domain)}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10">
                {job.type}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight">
              {job.title}
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm flex-grow">
              {job.description}
            </p>

            <div className="flex items-center gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-fuchsia-500" />
                {job.duration}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet-500" />
                Remote
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {job.requirements.slice(0, 3).map((req, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-white/5 rounded border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                    {req}
                  </span>
                ))}
                {job.requirements.length > 3 && (
                  <span className="text-xs font-semibold px-2 py-1 text-slate-500">
                    +{job.requirements.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
              <Link to="/apply" state={{ role: job.title, domain: job.domain }} className="w-full btn-outline py-2.5 border-violet-200 dark:border-white/10 text-violet-700 dark:text-white hover:bg-violet-50 dark:hover:bg-white/5">
                Apply Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
