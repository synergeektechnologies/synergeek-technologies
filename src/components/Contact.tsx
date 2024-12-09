import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { CONTACT_INFO } from '../utils/constants';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_kms6eyb',
        'template_h6a50go',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
          to_email: CONTACT_INFO.email,
        },
        '9yyRQXTmteNWuNqZs'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section">
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <Toaster position="top-right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to discuss your project
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-indigo-50 rounded-xl p-6 sm:p-8">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start sm:items-center">
                  <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 break-all">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start sm:items-center">
                  <Phone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">{CONTACT_INFO.phones[0].number}</p>
                  </div>
                </div>
                <div className="flex items-start sm:items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 rounded-lg border-gray-300 shadow-md text-lg px-4 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 rounded-lg border-gray-300 shadow-md text-lg px-4 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-12 rounded-lg border-gray-300 shadow-md text-lg px-4 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-md text-lg px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-white text-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;