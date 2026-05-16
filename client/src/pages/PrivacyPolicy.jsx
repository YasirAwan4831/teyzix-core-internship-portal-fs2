import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out an application form. This includes your name, email address, phone number, resume, and other information you choose to share."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to process your internship application, communicate with you about opportunities, improve our services, and comply with legal obligations. We may also use your information for marketing purposes with your consent."
    },
    {
      title: "3. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure."
    },
    {
      title: "4. Sharing of Information",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with our team members and business partners only when necessary to provide our services."
    },
    {
      title: "5. Cookies and Tracking",
      content: "Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences."
    },
    {
      title: "6. Your Rights",
      content: "You have the right to access, modify, or delete your personal information. You can also opt-out of marketing communications at any time by contacting us."
    },
    {
      title: "7. Contact Us",
      content: "If you have questions about this Privacy Policy, please contact us at contact@teyzixcore.com or +92 371 4699788."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600 text-lg mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="glass-panel p-8 mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              At TEYZIX CORE, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our website and services.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 hover:border-violet-400 transition-all"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 p-8 bg-emerald-50 rounded-2xl border border-emerald-200"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="space-y-2 text-slate-600">
              <p><strong>Email:</strong> contact@teyzixcore.com</p>
              <p><strong>Phone:</strong> +92 371 4699788</p>
              <p><strong>Website:</strong> https://teyzixcore.netlify.app/</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
