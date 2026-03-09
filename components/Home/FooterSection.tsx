"use client";
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/lurnexa-publications/?viewAsMember=true", label: "LinkedIn" },
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
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-4 inline-flex items-center justify-center sm:justify-start">
              <img
                src="/Logo.png"
                alt="Lurnexa Logo"
                className="h-10 w-auto object-contain sm:h-8"
              />
            </div>
            <h3 className="text-base font-semibold text-slate-800 sm:text-sm">
              Lurnexa Publications
            </h3>
            <p className="mt-2 text-xs text-slate-600 max-w-xs">
              Empowering technology, innovation, and creativity through knowledge.
            </p>

            {/* ==== MODERN CONTACT CARD ==== */}
            <div className="mt-6 flex w-full max-w-xs flex-col space-y-4 rounded-xl bg-white/60 p-4 shadow-sm border border-white/80 backdrop-blur-sm">
              
              {/* Email Block */}
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[#FFF0E6]">
                  <Mail size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Email Us
                  </span>
                  <a
                    href="mailto:lurnexapublication@gmail.com"
                    className="text-xs font-medium text-slate-800 hover:text-slate-600 transition-colors"
                  >
                    lurnexapublication@gmail.com
                  </a>
                </div>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3 text-left">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[#FFF0E6]">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Visit Us
                  </span>
                  <p className="text-xs font-medium text-slate-800 leading-relaxed">
                    130–187, Ramulavari Gudi Centre,<br />
                    Gorantla, Guntur – 522034,<br />
                    <span className="text-slate-500 font-normal">Andhra Pradesh, India</span>
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          {/* ==== Quick Links ==== */}
          <div className="text-center sm:text-left sm:ml-8 md:ml-12">
            <h4 className="mb-4 text-base font-semibold text-slate-800 sm:text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("https://lurnexa.in/aboutus", "_blank")}>
                  About
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("/company", "_blank")}>
                  Company
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("/services", "_blank")}>
                  Services
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("/testimonials", "_blank")}>
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
            <ul className="space-y-3">
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("/privacy-policy", "_blank")}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("/terms-of-service", "_blank")}>
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("https://lurnexa.in/contact", "_blank")}>
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-xs text-slate-600 hover:text-slate-900 transition-colors" onClick={() => window.open("/sitemap", "_blank")}>
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
            <span className="font-semibold text-slate-800">Lurnexa</span>.
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
                  className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 transition-all hover:bg-white hover:text-slate-900 hover:shadow-sm"
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