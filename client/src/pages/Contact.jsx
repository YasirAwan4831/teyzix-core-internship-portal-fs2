import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, CheckCircle, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "contact@teyzixcore.com",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+92 371 4699788",
      subtitle: "Available 24/7",
      bgColor: "bg-fuchsia-50",
      borderColor: "border-fuchsia-100",
      iconColor: "text-fuchsia-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      value: "TEYZIX CORE",
      subtitle: "Pakistan",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 mb-6 shadow-lg border border-emerald-200">
          <MessageSquare className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Get In Touch</h1>
        <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
          Have questions about our internship program or curriculum? Reach out to us and our team will get back to you shortly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 5 }}
              className="glass-panel p-8 md:p-10 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 border border-slate-200 hover:border-emerald-400"
            >
              <div className="flex items-start gap-5 group">
                <div className={`w-14 h-14 rounded-2xl ${info.bgColor} border ${info.borderColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={info.iconColor}>{info.icon}</span>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{info.title}</h4>
                  <p className="text-slate-600 font-medium hover:text-emerald-600 cursor-pointer transition-colors">{info.value}</p>
                  {info.subtitle && <p className="text-slate-500 text-sm mt-1">{info.subtitle}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-8 md:p-10 shadow-xl border border-slate-200 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-2 text-slate-900">Send a Message</h3>
          <p className="text-slate-600 font-medium mb-8">We'll get back to you within 24 hours.</p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-bold text-center flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Your message has been sent successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 block">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-emerald-500/60 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <motion.input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="input-field pl-11 bg-white/50 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700 block">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-emerald-500/60 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <motion.input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="input-field pl-11 bg-white/50 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all rounded-xl"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 block">Your Message</label>
              <div className="relative group">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-emerald-500/60 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <motion.textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="input-field pl-11 bg-white/50 border-slate-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 resize-none custom-scrollbar transition-all rounded-xl"
                  placeholder="How can we help you today?"
                  whileFocus={{ scale: 1.01 }}
                ></motion.textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary py-4 text-lg mt-4 shadow-xl hover:shadow-2xl disabled:opacity-70 transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
