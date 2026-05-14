import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-500/10 mb-6 shadow-inner">
          <MessageSquare className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">Get In Touch</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg">
          Have questions about our internship program or curriculum? Reach out to us and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="glass-panel p-8 md:p-10 shadow-lg shadow-slate-200/40 dark:shadow-none bg-white dark:bg-white/5 dark:border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email Us</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium hover:text-violet-600 cursor-pointer transition-colors">contact@teyzixcore.com</p>
                  <p className="text-slate-600 dark:text-slate-400 font-medium hover:text-violet-600 cursor-pointer transition-colors">support@teyzixcore.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">+1 (555) 123-4567</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Our HQ</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    100 Innovation Way<br/>
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-white/5 dark:border-white/10"
        >
          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Send a Message</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium mb-8">We'll get back to you within 24 hours.</p>
          
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-emerald-700 dark:text-emerald-400 text-sm font-bold text-center"
            >
              Your message has been sent successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="input-field bg-slate-50 dark:bg-white/5"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="input-field bg-slate-50 dark:bg-white/5"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Message</label>
              <textarea
                id="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="input-field bg-slate-50 dark:bg-white/5 resize-none custom-scrollbar"
                placeholder="How can we help you today?"
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary py-4 text-lg mt-4 shadow-xl">
              <span className="flex items-center gap-2">
                Send Message <Send className="w-5 h-5 ml-1" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
