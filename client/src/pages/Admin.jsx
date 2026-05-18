import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Search, Filter, AlertCircle, FileText, Database, X, Eye, EyeOff, Lock } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    const checkAuth = localStorage.getItem('adminToken');
    if (checkAuth) {
      setIsAuthenticated(true);
      fetchApplications();
    }
  }, []);

  const fetchApplications = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const { data } = await axios.get(`${apiUrl}/applications`);
      setApplications(data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setLoading(false);
    }
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      localStorage.setItem('adminToken', 'admin-' + Date.now());
      setIsAuthenticated(true);
      setFormData({ email: '', password: '' });
      fetchApplications();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setApplications([]);
    setSearchTerm('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md mx-4"
        >
          <div className="glass-panel p-8 shadow-xl">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2 text-center">Admin Panel</h1>
            <p className="text-slate-600 text-center mb-8">Manage internship applications</p>

            <form onSubmit={handleAuthSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-emerald-500/60 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="admin@teyzixcore.com"
                    className="input-field pl-11 bg-white/50 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-emerald-500/60 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="input-field pl-11 pr-12 bg-white/50 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-emerald-500 transition-colors z-10"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary py-3 text-lg"
              >
                {isLoginMode ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-4">Demo Credentials:</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 space-y-2">
                <p><strong>Email:</strong> admin@teyzixcore.com</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const filteredApplications = applications.filter(app => 
    app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.selectedDomain.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Failed to load dashboard</h2>
        <p className="text-slate-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-slate-600 font-medium">Manage and review internship applications</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto flex-col sm:flex-row">
          <div className="relative flex-1 sm:flex-none sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search applicants or domains..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-11 py-2.5 w-full bg-white shadow-sm"
            />
          </div>
          <button className="btn-outline px-4 py-2.5 text-sm rounded-xl border-slate-200 bg-white shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
          <button 
            onClick={handleLogout}
            className="btn-outline px-6 py-2.5 text-sm rounded-xl border-slate-200 bg-white shadow-sm text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>

      {filteredApplications.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="glass-panel p-16 text-center text-slate-500 flex flex-col items-center justify-center min-h-[40vh] shadow-sm"
        >
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <Database className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No applications found</h3>
          <p className="text-slate-500 max-w-sm">
            {searchTerm ? "No applicants match your search criteria. Try a different term." : "Your database is empty. Once candidates apply, they will appear here."}
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApplications.map((app, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={app._id}
              className="glass-panel p-6 flex flex-col h-full bg-white border border-slate-200 hover:shadow-lg hover:border-violet-300 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1.5">{app.fullName}</h3>
                  <span className="inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                    {app.selectedDomain}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail className="w-4 h-4 text-slate-500" />
                  </div>
                  <a href={`mailto:${app.email}`} className="hover:text-emerald-600 font-medium transition-colors truncate">{app.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="w-4 h-4 text-slate-500" />
                  </div>
                  <a href={`tel:${app.phoneNumber}`} className="hover:text-emerald-600 font-medium transition-colors">{app.phoneNumber}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Calendar className="w-4 h-4 text-slate-500" />
                  </div>
                  <span className="font-medium">{new Date(app.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cover Letter / Message</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 border border-slate-100 h-32 overflow-y-auto custom-scrollbar leading-relaxed">
                  {app.coverLetter}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
