import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on TEYZIX CORE's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
    },
    {
      title: "3. Disclaimer",
      content: "The materials on TEYZIX CORE's website are provided on an 'as is' basis. TEYZIX CORE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall TEYZIX CORE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TEYZIX CORE's website."
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on TEYZIX CORE's website could include technical, typographical, or photographic errors. TEYZIX CORE does not warrant that any of the materials on our website are accurate, complete, or current. TEYZIX CORE may make changes to the materials contained on our website at any time without notice."
    },
    {
      title: "6. Links",
      content: "TEYZIX CORE has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TEYZIX CORE of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "7. Modifications",
      content: "TEYZIX CORE may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
    },
    {
      title: "8. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts located in Pakistan."
    },
    {
      title: "9. Application Agreement",
      content: "By submitting an application through our platform, you agree to be bound by all applicable laws and regulations. You confirm that all information provided is accurate, truthful, and complete. TEYZIX CORE reserves the right to reject any application or terminate any internship agreement if false information is discovered."
    },
    {
      title: "10. Intellectual Property",
      content: "All content, features, and functionality including but not limited to all information, software, text, displays, images, video and audio are the exclusive property of TEYZIX CORE."
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
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600 text-lg mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="glass-panel p-8 mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Welcome to TEYZIX CORE. These Terms of Service ("Terms") govern your use of our website, services, and internship program. Please read these terms carefully before using our services.
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
            transition={{ delay: 1 }}
            className="mt-12 p-8 bg-emerald-50 rounded-2xl border border-emerald-200"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-3">For any questions regarding these Terms of Service, please contact:</p>
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

export default TermsOfService;
