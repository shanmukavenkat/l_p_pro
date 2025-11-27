import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export default function FooterSection() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      className="border-t border-slate-200 py-8 md:py-12"
      style={{ backgroundColor: "#FFF0E6" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ==== Main Footer Content ==== */}
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* ==== Company Info ==== */}
          <div className="flex flex-col items-start justify-between text-center sm:text-left">
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-lg p-2 sm:justify-start">
                <img
                  src="/Logo.png"
                  alt="Lurnexa Logo"
                  className="h-10 w-auto object-contain sm:h-8"
                />
              </div>
              <h3 className="text-base font-semibold text-slate-800 sm:text-sm">
                Lurnexa Publications
              </h3>
              <p className="mt-2 text-xs text-slate-600 max-w-xs mx-auto sm:mx-0">
                Empowering technology, innovation, and creativity through
                knowledge.
              </p>

              {/* ==== Email Section ==== */}
              <div className="mt-3 flex items-center justify-center sm:justify-start text-xs text-slate-700">
                <Mail size={14} className="mr-2 text-slate-700" />
                <a
                  href="mailto:contact@lurnexa.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  lurnexapublication@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ==== Quick Links ==== */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 text-base font-semibold text-slate-800 sm:text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Company
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* ==== Legal Links ==== */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 text-base font-semibold text-slate-800 sm:text-sm">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors">
                  Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ==== Divider ==== */}
        <div className="mb-6 border-t border-slate-300"></div>

        {/* ==== Bottom Footer ==== */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}
          <p className="text-xs text-slate-600 text-center sm:text-left">
            All rights reserved. © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Lurnexa</span>.
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
