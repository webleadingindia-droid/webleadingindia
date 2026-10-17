'use client';

import { useState } from 'react';
import AboutSection from '@/components/ui/about-section';
import Link from 'next/link'
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProcessSection from '@/components/ui/process-section';

import { 
  Users, Target, Award, Lightbulb, ArrowRight, 
  CheckCircle, Stethoscope, Heart, Shield, Ambulance,
  Star, TrendingUp, Calendar, Eye
} from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const team = [
    {
      name: 'Dr. Rohit Sharma',
      position: 'Healthcare Marketing Director',
      image: 'https://images.pexels.com/photos/7578808/pexels-photo-7578808.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '10+ years in healthcare digital marketing and patient acquisition',
      expertise: ['Patient Acquisition', 'Medical SEO', 'HIPAA Compliance']
    },
    {
      name: 'Dr. Priya Singh',
      position: 'Medical Content Strategist',
      image: 'https://images.pexels.com/photos/7648276/pexels-photo-7648276.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in healthcare content and patient education strategies',
      expertise: ['Content Strategy', 'Patient Education', 'Medical Writing']
    },
    {
      name: 'Amit Kumar',
      position: 'Healthcare SEO Specialist',
      image: 'https://images.pexels.com/photos/7587421/pexels-photo-7587421.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Specialized in medical SEO and healthcare local search optimization',
      expertise: ['Technical SEO', 'Local Search', 'Analytics']
    },
    {
      name: 'Sneha Patel',
      position: 'Patient Acquisition Manager',
      image: 'https://images.pexels.com/photos/7648278/pexels-photo-7648278.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in healthcare PPC and patient lead generation strategies',
      expertise: ['PPC Management', 'Lead Generation', 'Conversion Optimization']
    }
  ];

  const achievements = [
    { number: '200+', label: 'Healthcare Clients', icon: Users },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '50,000+', label: 'Patients Reached', icon: TrendingUp },
    { number: '8+', label: 'Years Experience', icon: Calendar }
  ];

  const values = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'We maintain strict patient privacy and data security standards',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Patient-First',
      description: 'We focus on connecting patients with the right healthcare providers',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Medical Ethics',
      description: 'We uphold the highest standards of healthcare marketing ethics',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We deliver measurable patient acquisition and practice growth',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-4 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 200+ Healthcare Providers
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Healthcare</span> Digital Growth
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              India's premier healthcare digital marketing agency exclusively focused on helping 
              medical practices, hospitals, and healthcare providers grow their patient base through 
              strategic online marketing solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Growth Journey
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AboutSection />

      {/* Enhanced Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Built on strong healthcare values and a clear vision for sustainable medical practice growth
            </p>
          </div>

          {/* Enhanced Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 backdrop-blur-sm border border-gray-200">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl capitalize transition-all duration-300 font-semibold ${
                    activeTab === tab
                      ? 'bg-white text-green-600 shadow-lg border border-green-100'
                      : 'text-gray-600 hover:text-green-600 hover:bg-white/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'mission' && (
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="flex items-start mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                      <p className="text-lg text-gray-700 leading-relaxed font-light">
                        To empower healthcare providers with specialized digital marketing solutions that 
                        connect them with the right patients, enhance their online reputation, and drive 
                        sustainable practice growth while maintaining the highest standards of medical ethics 
                        and patient privacy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'vision' && (
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="flex items-start mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                      <p className="text-lg text-gray-700 leading-relaxed font-light">
                        To become India's most trusted healthcare digital marketing partner, known for 
                        delivering measurable patient growth while upholding the integrity and ethics of 
                        the medical profession. We envision a future where every healthcare provider can 
                        effectively reach and serve their ideal patients through digital channels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'values' && (
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="flex items-start mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Values</h3>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        The foundation of everything we do is built upon these core principles
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, index) => {
                      const IconComponent = value.icon;
                      return (
                        <div 
                          key={index}
                          className="group p-6 rounded-2xl bg-white/50 border border-gray-100 hover:border-gray-200 hover:bg-white transition-all duration-500 hover:shadow-lg"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Healthcare Specialization Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Healthcare Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Specialized digital marketing solutions tailored for various healthcare sectors and medical specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Stethoscope,
                title: 'Hospitals & Clinics',
                description: 'Multi-specialty and single-specialty medical practices',
                gradient: 'from-green-500 to-green-600'
              },
              {
                icon: Heart,
                title: 'Specialty Centers',
                description: 'Cardiology, orthopedics, dental, and other specialties',
                gradient: 'from-pink-500 to-rose-600'
              },
              {
                icon: Ambulance,
                title: 'Emergency Care',
                description: 'Urgent care centers and emergency medical services',
                gradient: 'from-orange-500 to-red-600'
              },
              {
                icon: Shield,
                title: 'Mental Health',
                description: 'Therapy practices and mental wellness centers',
                gradient: 'from-purple-500 to-indigo-600'
              }
            ].map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <Card 
                  key={index} 
                  className="group text-center border-0 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${specialty.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{specialty.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />

      <Footer />
    </main>
  );
}