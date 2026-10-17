'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  PenTool, 
  MessageCircle,
  Quote,
  Globe,
  Palette,
  Search,
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Sparkles
} from 'lucide-react';

export default function SidebarNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const services = [
    { name: 'Web Development', href: '/services/healthcare-web-development', icon: Globe },
    { name: 'Web Design', href: '/services/healthcare-web-design', icon: Palette },
    { name: 'SEO Services', href: '/services/healthcare-seo-services', icon: Search },
    { name: 'SMO Services', href: '/services/healthcare-social-media-marketing', icon: TrendingUp },
    { name: 'E-commerce Development', href: '/services/healthcare-ecommerce-development', icon: ShoppingCart },
    { name: 'Digital Marketing', href: '/services/healthcare-digital-marketing', icon: BarChart3 }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Briefcase, hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio', icon: FolderOpen },
    { name: 'Blog', href: '/blogs/', icon: PenTool },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mini-nav-det flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center hover:text-green-200 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8376817258</span>
              </div>
              <div className="flex items-center hover:text-green-200 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@webleadingindia.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="font-medium">Get 20% OFF on your first project!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`} style={{ top: isScrolled ? '0' : '40px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Image
                src="/Logo.png"
                alt="Web Leading India"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button 
                        className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-all duration-300 group-hover:scale-105"
                        onMouseEnter={() => setActiveDropdown('services')}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                      </button>
                      
                      {activeDropdown === 'services' && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50 transform animate-in slide-in-from-top-2"
                          onMouseEnter={() => setActiveDropdown('services')}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="px-4 pb-3 border-b border-gray-100">
                            <h3 className="font-semibold text-gray-900 text-sm">Our Services</h3>
                            <p className="text-xs text-gray-500 mt-1">Professional digital solutions</p>
                          </div>
                          <div className="py-2">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                              >
                                <service.icon className="w-5 h-5 mr-3 text-green-500 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105"
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Link href="/quote" className="hidden md:block">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Quote className="w-4 h-4 mr-2" />
                  Get Free Quote
                </Button>
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-50 p-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Logo.png"
                  alt="Web Leading India"
                  width={140}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-top-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                            >
                              <service.icon className="w-4 h-4 mr-3 text-green-500 group-hover:scale-110 transition-transform" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                    >
                      <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200">
            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Quote className="w-4 h-4 mr-2" />
                Get Free Quote
              </Button>
            </Link>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>+91 8376817258</span>
                </div>
              </div>
              <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@webleadingindia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}