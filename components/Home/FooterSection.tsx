import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function FooterSection() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="border-t border-slate-200 py-8 md:py-12" style={{ backgroundColor: '#FFF0E6' }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:mb-12">
          {/* Company Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex items-center rounded-lg  p-2">
                <span className="text-lg font-bold text-white bg-transparent">
                  <img src="/Logo.png" alt="Lurnexa Logo" className="h-8 w-auto object-contain" />
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">Lurnexa Publications</h3>
              <p className="mt-2 text-xs text-slate-600"></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">Quick Links</h4>
            <ul className="space-y-2">
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">About</button></li>
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Company</button></li>
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Services</button></li>
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Testimonials</button></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">Legal</h4>
            <ul className="space-y-2">
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Privacy Policy</button></li>
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Terms of Service</button></li>
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Contact Us</button></li>
              <li><button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">Sitemap</button></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 border-t border-slate-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}
          <p className="text-xs text-slate-600">
            All rights reserved. © {new Date().getFullYear()} Lurnexa.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-800"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}