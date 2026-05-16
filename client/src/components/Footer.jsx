import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/teyzixcore/", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: FaInstagram, url: "https://www.instagram.com/teyzixcore?igsh=MXVrMWI5aHpvemtuaA==", label: "Instagram", color: "hover:bg-pink-600 hover:text-white" },
    { icon: FaFacebook, url: "https://www.facebook.com/share/1D68YsTEqK/", label: "Facebook", color: "hover:bg-blue-700 hover:text-white" },
    { icon: FaTiktok, url: "https://tiktok.com/@teyzixcore", label: "TikTok", color: "hover:bg-black hover:text-white" }
  ];

  const quickLinks = [
    { name: 'Browse Internships', path: '/internships' },
    { name: 'Apply Now', path: '/apply' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Admin Dashboard', path: '/admin' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <img src="/logo.jpeg" alt="TEYZIX CORE" className="w-10 h-10 rounded-lg group-hover:scale-110 transition-transform shadow-md" />
              <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">TEYZIX <span className="text-emerald-600">CORE</span></span>
            </Link>
            <p className="text-slate-600 max-w-sm font-medium leading-relaxed">
              Empowering the next generation of tech leaders through hands-on internships and real-world projects that shape futures.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 shadow-md hover:shadow-lg transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-emerald-600 font-medium transition-all hover:translate-x-1 inline-flex items-center gap-1 group">
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-violet-600 to-fuchsia-600 rounded-full"></div>
              <span>Contact</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group">
                <motion.div
                  className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                </motion.div>
                <a href="mailto:contact@teyzixcore.com" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors text-sm">
                  contact@teyzixcore.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <motion.div
                  className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp className="w-4 h-4 text-green-600 group-hover:text-white" />
                </motion.div>
                <a href="https://wa.me/923714699788" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600 font-medium transition-colors text-sm">
                  +92 371 4699788
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider with gradient */}
        <div className="relative h-px my-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-8"
        >
          {/* Newsletter CTA */}
          <div className="text-center">
          <motion.div
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-slate-700 font-semibold text-sm">
              💡 <span className="text-emerald-600">Join our community</span> for internship updates and tech insights
            </p>
          </motion.div>
          </div>

          {/* Links and Copyright */}
          <div className="pt-6 border-t border-slate-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 font-medium text-sm">
              <p className="text-left">&copy; {new Date().getFullYear()} TEYZIX CORE. All rights reserved.</p>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="hover:text-emerald-600 transition-colors hover:underline decoration-emerald-600 decoration-2 underline-offset-4">
                  Privacy Policy
                </Link>
                <div className="w-px bg-slate-300"></div>
                <Link to="/terms-of-service" className="hover:text-emerald-600 transition-colors hover:underline decoration-emerald-600 decoration-2 underline-offset-4">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
