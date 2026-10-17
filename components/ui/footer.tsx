'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Web Development', href: '/services/healthcare-web-development'},
    { name: 'Web Design', href: '/services/healthcare-web-design'},
    { name: 'SEO Services', href: '/services/healthcare-seo-services'},
    { name: 'SMO Services', href: '/services/healthcare-social-media-marketing'},
    { name: 'E-commerce Development', href: '/services/healthcare-ecommerce-development'},
    { name: 'Digital Marketing', href: '/services/healthcare-digital-marketing'}
  ];

  const quickLinks = [
    { name: 'Service Area', href: '/services-area/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/Logo.png"
                  alt="Web Leading India"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Digital marketing agency in India, specializing in web development, 
                design, SEO, and digital marketing solutions that drive real business growth.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/webleadingindia" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/webleadingindia_/" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-gray-300 hover:text-green-400 transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">C - 1, 135, Gali No. 11, Ramesh Enclave, Phase 3,</p>
                    <p className="text-gray-300">Kirari Suleman Nagar, Delhi - 110086</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <a href="tel:+918376817258" className="text-gray-300 hover:text-green-400 transition-colors">
                    +91 8376817258
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <a href="mailto:info@webleadingindia.com" className="text-gray-300 hover:text-green-400 transition-colors">
                    info@webleadingindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="border-t border-gray-800 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm text-center md:text-left">
        © 2025 Web Leading India. Operated by SK Enterprises | GSTIN: 07CKLPG1511M1Z6
      </p>

      <div className="flex space-x-6 mt-4 md:mt-0">
        <Link
          href="/privacy-policy"
          className="text-gray-400 hover:text-green-400 text-sm transition-colors"
        >
          Privacy Policy
        </Link>

        <Link
          href="https://webleadingindia.com/sitemap.xml"
          className="text-gray-400 hover:text-green-400 text-sm transition-colors"
        >
          Sitemap
        </Link>
      </div>
    </div>
  </div>
</div>
    </footer>
  );
}