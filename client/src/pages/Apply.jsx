import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Briefcase, FileText } from 'lucide-react';

const Apply = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultDomain = location.state?.domain || 'Full Stack Web Development';
  const defaultRole = location.state?.role || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    selectedDomain: defaultDomain,
    coverLetter: defaultRole ? `I am interested in applying for the ${defaultRole} role...` : ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const domains = [
    'Full Stack Web Development',
    'Mobile App Development',
    'Frontend Development',
    'Backend Development',
    'Python Development',
    'Data Analytics',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'UI/UX Design',
    'Digital Marketing',
    'Graphic Designing',
    'C/C++ Programming'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${apiUrl}/applications`, formData);
      setStatus({ loading: false, error: null, success: true });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      setStatus({ 
        loading: false, 
        error: error.response?.data?.message || 'Something went wrong. Please try again.', 
        success: false 
      });
    }
  };

  if (status.success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] text-center"
      >
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Application Submitted!</h2>
        <p className="text-slate-600 max-w-md font-medium text-lg">
          Thank you for applying to TEYZIX CORE. We've received your application and will be in touch soon.
        </p>
        <p className="text-sm font-semibold text-emerald-600 mt-8 animate-pulse">Redirecting to home...</p>
      </motion.div>
    );
  }

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Join The Team</h1>
        <p className="text-slate-600 font-medium">Fill out the form below to apply for the elite internship cohort.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 md:p-12 shadow-xl shadow-slate-200/50"
      >
        {status.error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm font-medium">{status.error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-emerald-500/60" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-field bg-white/50 pl-11 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-emerald-500/60" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field bg-white/50 pl-11 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-bold text-slate-700">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-emerald-500/60" />
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="input-field bg-white/50 pl-11 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="selectedDomain" className="text-sm font-bold text-slate-700">Interested Domain</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-emerald-500/60" />
                </div>
                <select
                  id="selectedDomain"
                  name="selectedDomain"
                  value={formData.selectedDomain}
                  onChange={handleChange}
                  className="input-field bg-white/50 pl-11 appearance-none font-medium border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                >
                  {domains.map(domain => (
                    <option key={domain} value={domain} className="bg-white text-slate-900">
                      {domain}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="coverLetter" className="text-sm font-bold text-slate-700">Message / Cover Letter</label>
            <div className="relative">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                <FileText className="h-5 w-5 text-emerald-500/60" />
              </div>
              <textarea
                id="coverLetter"
                name="coverLetter"
                required
                rows="6"
                value={formData.coverLetter}
                onChange={handleChange}
                className="input-field bg-white/50 pl-11 resize-none custom-scrollbar border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl py-4"
                placeholder="Tell us about yourself, your skills, and why you want to join..."
              ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status.loading}
            className={`w-full btn-primary py-4 text-lg mt-8 shadow-xl ${status.loading ? 'opacity-70 cursor-not-allowed transform-none hover:translate-y-0' : ''}`}
          >
            {status.loading ? (
              <span className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting Application...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Submit Application <Send className="w-5 h-5 ml-1" />
              </span>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Apply;
