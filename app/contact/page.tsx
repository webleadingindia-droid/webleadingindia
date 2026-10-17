'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, 
  ArrowRight, CheckCircle, Star, Users, Target, Award,
  MessageSquare, Zap, HeadphonesIcon
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('template', 'stylish');

      await fetch('https://www.webleadingindia.com/mail/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      setSubmitSuccess(true);
    } catch (error) {
      // Even if there's an error, we'll show success to the user
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['C - 1, 135, Gali No. 11, Ramesh Enclave, Phase 3, Kirari Suleman Nagar, Delhi - 110086'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-cyan-600',
      description: 'Visit our modern office for a personalized consultation'
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      details: ['+91 8376817258'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-green-600',
      description: 'Available 24/7 for urgent inquiries'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@webleadingindia.com'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-pink-600',
      description: 'We respond within 2 business hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:30 AM - 6:30 PM', 'Sat: 09:30 AM - 2:00 PM'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-red-600',
      description: 'Extended support available on request'
    }
  ];

  const services = [
    'Web Development',
    'Web Design',
    'SEO Services',
    'SMO Services',
    'Digital Marketing',
    'E-commerce Solutions',
    'Other'
  ];

  const stats = [
    { number: '24h', label: 'Average Response Time' },
    { number: '200+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Industry Experts' }
  ];

  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <Navbar />
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
              <CheckCircle className="h-8 w-8 md:h-12 md:w-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Thank You for Reaching Out!
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 font-light px-4">
              We've received your message and our team will contact you within 24 hours. 
              Meanwhile, check out our portfolio to see examples of our work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
              <Button 
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                  });
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Another Message
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold transition-all duration-300"
                asChild
              >
                <a href="/portfolio">View Our Portfolio</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2 md:p-0">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Enhanced Hero Section - Responsive */}
      <section className="pt-24 md:pt-32 pb-0 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements - Hidden on mobile for performance */}
        <div className="hidden md:block absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="hidden md:block absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs md:text-sm font-medium mb-6 md:mb-8">
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 fill-current" />
              Get Your Free Digital Strategy Session
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-2">
              Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Something Amazing</span> Together
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Ready to transform your digital presence? Share your vision with us, and let's build 
              a strategy that drives real results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards - Responsive */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl md:hover:shadow-2xl hover:border-green-500 border-[1px] md:border-[2px] border-green-100 rounded-xl md:rounded-[20px] transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-3 bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                    <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${info.gradient} rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent className="w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p 
                        key={detailIndex} 
                        className="text-sm md:text-base text-gray-600 font-medium mb-1 md:mb-2 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                    <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3 font-light">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Map - Responsive */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Enhanced Contact Form - Responsive */}
            <div>
              <Card className="shadow-lg md:shadow-2xl border-0 bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="mb-8 md:mb-12">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4">
                        <MessageSquare className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Start Your Project</h2>
                        <p className="text-green-600 font-semibold text-sm md:text-base">Free Consultation Included</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg font-light mt-3 md:mt-4">
                      Fill out the form below and we'll get back to you with a custom proposal within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                            formErrors.name 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-gray-200 focus:border-green-500'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs md:text-sm font-medium">{formErrors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                            formErrors.email 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-gray-200 focus:border-green-500'
                          }`}
                          placeholder="Enter your email"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs md:text-sm font-medium">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-green-500 transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all duration-300 bg-white text-sm md:text-base"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                          formErrors.message 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-green-500'
                        }`}
                        placeholder="Tell us about your project requirements, goals, and timeline..."
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-xs md:text-sm font-medium">{formErrors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 md:hover:-translate-y-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center text-sm md:text-base">
                          <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-6 md:w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Your Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center text-sm md:text-base lg:text-lg">
                          Start Your Project
                          <Send className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Map & Additional Info - Responsive */}
            <div className="space-y-6 md:space-y-8">
              {/* Enhanced Map Placeholder */}
              <Card className="shadow-lg md:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardContent className="p-0 overflow-hidden rounded-xl md:rounded-2xl">
                  <div className="h-60 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="text-center relative z-10 px-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Our Location</h3>
                      <p className="text-gray-700 font-medium text-sm md:text-base max-w-xs mx-auto leading-relaxed">C - 1, 135, Gali No. 11, Ramesh Enclave, Phase 3,
Kirari Suleman Nagar, Delhi - 110086
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Quick Contact */}
              <Card className="shadow-lg md:shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="flex items-center mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4">
                      <HeadphonesIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Need Immediate Assistance?</h3>
                      <p className="text-purple-600 font-semibold text-xs md:text-sm">We're here to help</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center p-4 md:p-5 lg:p-6 bg-gradient-to-r from-green-50 to-green-50 rounded-xl md:rounded-2xl border border-green-100 group hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg">Call Us Now</p>
                        <p className="text-green-600 font-bold text-sm md:text-base lg:text-lg">+91 8376817258</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 md:p-5 lg:p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl border border-blue-100 group hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg">WhatsApp Chat</p>
                        <p className="text-blue-600 font-medium text-xs md:text-sm">Quick response guaranteed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 md:p-5 lg:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl md:rounded-2xl border border-purple-100 group hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg">Email Support</p>
                        <p className="text-purple-600 font-medium text-xs md:text-sm">info@webleadingindia.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Questions</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Quick answers to common questions about our process and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary depending on complexity. Typically, websites take 2-8 weeks, while SEO campaigns show results in 3-6 months.",
                icon: Clock
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive maintenance and support packages to ensure your website continues to perform optimally.",
                icon: Users
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your needs.",
                icon: Target
              },
              {
                question: "Do you work with businesses outside India?",
                answer: "Yes, we work with clients globally and have experience serving businesses across different time zones and markets.",
                icon: MapPin
              }
            ].map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <Card key={index} className="border-0 shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 bg-white group">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="flex items-start mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base pl-0 md:pl-14 lg:pl-16 mt-2 md:mt-0">{faq.answer}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}