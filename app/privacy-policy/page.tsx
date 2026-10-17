'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, UserCheck, Mail, Calendar, ArrowUp } from 'lucide-react';

export default function HealthcarePrivacyPolicyPage() {

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection & Patient Confidentiality',
      description: 'We follow strict protocols to ensure that your health data is protected and remains confidential at all times.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Eye,
      title: 'Transparency & Consent',
      description: 'We are transparent about how we collect, use, and share your medical data. Your consent is required before any data is used.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Lock,
      title: 'Secure Medical Data Storage',
      description: 'Your health information is stored in secure, encrypted environments that adhere to healthcare compliance standards.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: UserCheck,
      title: 'Patient Control & Access',
      description: 'You have full control over your healthcare data, with easy access to update or delete your personal health information.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const tableOfContents = [
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'information-usage', title: 'How We Use Your Information' },
    { id: 'information-sharing', title: 'Information Sharing & Third Parties' },
    { id: 'data-security', title: 'Data Security & Compliance' },
    { id: 'cookies', title: 'Cookies and Tracking' },
    { id: 'user-rights', title: 'Your Rights & Choices' },
    { id: 'third-party', title: 'Third-Party Providers' },
    { id: 'policy-changes', title: 'Policy Changes' },
    { id: 'contact-us', title: 'Contact Us' }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Healthcare Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Protecting your health information is our priority. This policy explains how Web Leading India collects, uses, and safeguards your sensitive healthcare data.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-4 inline-block">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: January 15, 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Privacy Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach to patient privacy is grounded in these key principles designed to safeguard your health data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${principle.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${principle.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 shadow-xl border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-colors duration-200"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Privacy Policy Content */}
            <div className="lg:col-span-3">
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="prose max-w-none">
                    
                    {/* Introduction */}
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500">
                        Introduction
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Welcome to Web Leading India. We understand the importance of safeguarding your health data. Our healthcare solutions are designed with the utmost care to protect the confidentiality, security, and integrity of your personal health information.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        By engaging with our healthcare services, you agree to the collection, use, and sharing of your personal health information as described in this Privacy Policy.
                      </p>
                    </div>

                    {/* Information We Collect */}
                    <div id="information-collection" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500">
                        Information We Collect
                      </h2>
                      

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We collect health-related information that may include:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Medical history and records</li>
                        <li>Test results and diagnoses</li>
                        <li>Prescriptions and treatments</li>
                        <li>Healthcare provider information</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We may collect personal information such as:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Name, address, phone number, email address</li>
                        <li>Demographic details (e.g., age, gender)</li>
                        <li>Payment information for services rendered</li>
                      </ul>
                    </div>

                    {/* How We Use Your Information */}
                    <div id="information-usage" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500">
                        How We Use Your Information
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Your health and personal data is used to:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Provide medical services and advice</li>
                        <li>Process payments for healthcare services</li>
                        <li>Provide personalized health recommendations</li>
                        <li>Maintain and improve healthcare services</li>
                        <li>Comply with legal and regulatory requirements</li>
                      </ul>
                    </div>

                    {/* Information Sharing & Third Parties */}
                    <div id="information-sharing" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">
                        Information Sharing and Third Parties
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We do not share your health information with third parties, except:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li><strong>Healthcare Providers:</strong> For the purpose of delivering medical services</li>
                        <li><strong>Legal Requirements:</strong> To comply with healthcare regulations (e.g., HIPAA)</li>
                        <li><strong>Service Providers:</strong> Trusted third parties who assist in our services</li>
                      </ul>
                    </div>

                    {/* Data Security & Compliance */}
                    <div id="data-security" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-500">
                        Data Security & Compliance
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We implement strict security measures to protect your health data and comply with healthcare data protection laws. These include:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>End-to-end encryption for health data</li>
                        <li>Compliance with HIPAA (or applicable regulations)</li>
                        <li>Access control and authentication for healthcare professionals</li>
                      </ul>
                    </div>

                    {/* Cookies and Tracking */}
                    <div id="cookies" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-indigo-500">
                        Cookies and Tracking Technologies
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We use cookies to improve your healthcare experience on our website. You can control cookie settings through your browser preferences.
                      </p>
                    </div>

                    {/* Your Rights & Choices */}
                    <div id="user-rights" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500">
                        Your Rights & Choices
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        You have the right to:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                        <li>Access, correct, or delete your health data</li>
                        <li>Opt-out of non-essential communications</li>
                        <li>Request copies of your health records in digital format</li>
                      </ul>
                    </div>

                    {/* Third-Party Providers */}
                    <div id="third-party" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-pink-500">
                        Third-Party Providers
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We may work with third-party providers for services related to healthcare delivery, but we ensure that they comply with all privacy and security regulations.
                      </p>
                    </div>

                    {/* Policy Changes */}
                    <div id="policy-changes" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-yellow-500">
                        Changes to This Privacy Policy
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We may update this policy to reflect changes in our practices or regulations. Any updates will be posted on this page.
                      </p>
                    </div>

                    {/* Contact Us */}
                    <div id="contact-us" className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500">
                        Contact Us
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        If you have any questions or concerns about your healthcare data, please contact us:
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 text-green-600 mr-3" />
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-700">info@webleadingindia.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Database className="w-5 h-5 text-green-600 mr-3" />
                          <div>
                            <p className="font-semibold text-gray-900">Address</p>
                            <p className="text-gray-700">H324+GM3, near Bharthal, Sector 21, Bharthal, Delhi, 110077</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-purple-600 mr-3" />
                          <div>
                            <p className="font-semibold text-gray-900">Data Protection Officer</p>
                            <p className="text-gray-700">info@webleadingindia.com</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mt-6">
                        We will respond to your privacy-related inquiries within 30 days of receipt.
                      </p>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
