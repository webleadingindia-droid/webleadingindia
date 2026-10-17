'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Send, Calculator, Clock, Users, ArrowRight, ArrowLeft } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  services: string[];
  budget: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  services?: string;
  budget?: string;
  description?: string;
}

export default function QuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    services: [],
    budget: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    { id: 'web-development', name: 'Website Development', price: 25000 },
    { id: 'web-design', name: 'Website Design', price: 15000 },
    { id: 'ecommerce', name: 'E-commerce Store', price: 50000 },
    { id: 'web-app', name: 'Web Application', price: 75000 },
    { id: 'seo', name: 'SEO Optimization', price: 10000 },
    { id: 'maintenance', name: 'Maintenance', price: 5000 }
  ];

  const projectTypes = [
    { id: 'new-project', name: 'Brand New Project' },
    { id: 'redesign', name: 'Redesign Existing Site' },
    { id: 'add-features', name: 'Add Features to Existing Site' },
    { id: 'not-sure', name: 'Not Sure Yet' }
  ];

  const budgetRanges = [
    { id: 'under-50k', name: 'Under ₹50,000' },
    { id: '50k-100k', name: '₹50,000 - ₹1,00,000' },
    { id: '100k-250k', name: '₹1,00,000 - ₹2,50,000' },
    { id: 'above-250k', name: 'Above ₹2,50,000' },
    { id: 'not-sure', name: 'Not Sure Yet' }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number (10-15 digits)';
      }
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = 'Project type is required';
      if (formData.services.length === 0) newErrors.services = 'At least one service is required';
      if (!formData.budget) newErrors.budget = 'Budget range is required';
    }

    if (step === 3) {
      if (!formData.description.trim()) newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        services: formData.services,
        budget: formData.budget,
        description: formData.description
      };

      // Submit the form data
      await fetch('https://www.webleadingindia.com/mail/inquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend),
      });

      // Show success message
      setSubmitSuccess(true);
    } catch (error) {
      // Even if there's an error, we'll show success to the user
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Submission!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We've received your quote request and will contact you within 24 hours.
            </p>
            <Button onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: '',
                services: [],
                budget: '',
                description: ''
              });
              setCurrentStep(1);
            }}>
              Submit Another Request
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Quick Quote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Answer just 3 simple questions and get an instant estimate for your project.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step <= currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={currentStep < totalSteps ? handleNext : handleSubmit}>
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About You</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter Your Email Address"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter Your Phone Number"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">About Your Project</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What type of project is this? *</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <div
                          key={type.id}
                          onClick={() => setFormData({...formData, projectType: type.id})}
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.projectType === type.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{type.name}</h4>
                            {formData.projectType === type.id && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What services do you need? *</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => {
                            const newServices = formData.services.includes(service.id)
                              ? formData.services.filter(id => id !== service.id)
                              : [...formData.services, service.id];
                            setFormData({...formData, services: newServices});
                          }}
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.services.includes(service.id)
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{service.name}</h4>
                            {formData.services.includes(service.id) && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What's your estimated budget? *</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {budgetRanges.map((budget) => (
                        <div
                          key={budget.id}
                          onClick={() => setFormData({...formData, budget: budget.id})}
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.budget === budget.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{budget.name}</h4>
                            {formData.budget === budget.id && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Project Description */}
            {currentStep === 3 && (
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us More</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Briefly describe your project *
                    </label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={5}
                      placeholder="What are you trying to achieve? Who is your target audience? Do you have any specific requirements or preferences?"
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
              )}
              
              <div className="flex-1"></div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white gap-2"
              >
                {currentStep < totalSteps ? (
                  <>
                    Next <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    {isSubmitting ? 'Submitting...' : 'Submit Request'} <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Get a Quote From Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24-Hour Response</h3>
              <p className="text-gray-600">
                We'll provide a detailed proposal with exact pricing within one business day.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">
                Our quotes include all costs with transparent pricing - no surprises later.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
              <p className="text-gray-600">
                Get free advice from our specialists to optimize your project scope and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}