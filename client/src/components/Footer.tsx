import React from "react";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  
  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  // Safe translation function with fallbacks
  const safeT = (key: string, fallback: string = key) => {
    try {
      const result = t(key);
      return typeof result === 'string' ? result : fallback;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return fallback;
    }
  };

  const quickLinks = [
    { name: safeT('nav.value', 'What we offer'), href: "#value" },
    { name: safeT('nav.platform', 'Platform'), href: "#platform" },
    { name: safeT('nav.industries', 'Industries'), href: "#industries" },
    { name: safeT('nav.erp', 'Solutions'), href: "#erp-solutions" },
    { name: safeT('nav.services', 'Services'), href: "#services" },
    { name: safeT('nav.contact', 'Contact'), href: "#contact" }
  ];



  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pulse-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className={`lg:col-span-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-start gap-4 mb-6 ${language === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
                {/* Logo and Company Name Group */}
                <div className="flex items-baseline gap-2" dir="ltr">
                  <div className="w-8 h-8 text-white flex-shrink-0 flex items-end">
                    <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full">
                      <g>
                        <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0"/>
                        <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76"/>
                        <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46"/>
                      </g>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold font-glacial text-white leading-none">MovinWare</span>
                </div>
              </div>
              <p className={`text-gray-300 leading-relaxed mb-8 max-w-md ${
                language === 'ar' 
                  ? 'font-arabic text-right' 
                  : 'font-inter text-left'
              }`} 
              style={language === 'ar' ? { textAlign: 'right' } : { textAlign: 'left' }}
              dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {safeT('footer.description', 'AI-powered ERP solutions designed for modern businesses.')}
              </p>
              
              {/* Social links */}
              <div className={`flex space-x-4 rtl:space-x-reverse ${language === 'ar' ? 'justify-start' : ''}`}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pulse-500 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{safeT('footer.quick_links', 'Quick Links')}</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{safeT('footer.contact', 'Contact')}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 rtl:ml-3 rtl:mr-0 text-pulse-500 flex-shrink-0" />
                  <span className="text-sm">info@movinware.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 rtl:ml-3 rtl:mr-0 text-pulse-500 flex-shrink-0" />
                  <span className="text-sm" dir="ltr">+966 561820949</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 rtl:ml-3 rtl:mr-0 text-pulse-500 flex-shrink-0" />
                  <span className="text-sm">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400" dir="ltr">
                {safeT('footer.copyright', '© 2025 MovinWare. All rights reserved.')}
              </div>
              <div className="text-sm text-gray-400">
                {safeT('footer.built_by', 'Developed by MovinWare Team')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;