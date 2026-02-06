// components/Contact.jsx
import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants/siteData';
import { useIntersectionObserver, useFormValidation } from '../hooks';
import Button from './ui/Button';
import Input from './ui/Input';
import Textarea from './ui/Textarea';

const Contact = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
  } = useFormValidation({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationRules = {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true },
      message: { required: true, minLength: 10 },
    };

    if (validate(validationRules)) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        reset();
        
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 2000);
    }
  };

  const iconMap = {
    '📧': Mail,
    '📞': Phone,
    '📍': MapPin,
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
            isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'
          }`}>
            Ready to start your project? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((info) => {
                const Icon = iconMap[info.icon];
                
                return (
                  <div key={info.id} className="flex items-start">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-500">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-900">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                placeholder="John Doe"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                placeholder="john@example.com"
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && errors.phone}
                placeholder="+1 (555) 123-4567"
                required
              />

              <Textarea
                label="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && errors.message}
                placeholder="Tell us about your project..."
                rows={5}
                required
              />

              {submitSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;