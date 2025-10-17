import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import sendRequest from '../../Utils/apirequest';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success(t('static.contact.success', 'Message sent successfully!'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(t('static.contact.error', 'Failed to send message. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {t('static.contact.title', 'Contact Us')}
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('static.contact.info.title', 'Get in Touch')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.contact.info.email.title', 'Email')}
                </h3>
                <p className="text-gray-600">hello@fabbhome.com</p>
                <p className="text-sm text-gray-500">
                  {t('static.contact.info.email.description', 'We typically respond within 24 hours')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.contact.info.phone.title', 'Phone')}
                </h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">
                  {t('static.contact.info.phone.description', 'Monday - Friday, 9 AM - 6 PM EST')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.contact.info.address.title', 'Address')}
                </h3>
                <p className="text-gray-600">
                  123 Design Street<br />
                  Creative City, CC 12345<br />
                  United States
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.contact.info.social.title', 'Follow Us')}
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('static.contact.form.title', 'Send us a Message')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('static.contact.form.name', 'Name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('static.contact.form.email', 'Email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('static.contact.form.subject', 'Subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">{t('static.contact.form.subject.placeholder', 'Select a subject')}</option>
                  <option value="general">{t('static.contact.form.subject.general', 'General Inquiry')}</option>
                  <option value="order">{t('static.contact.form.subject.order', 'Order Support')}</option>
                  <option value="design">{t('static.contact.form.subject.design', 'Design Consultation')}</option>
                  <option value="return">{t('static.contact.form.subject.return', 'Returns & Exchanges')}</option>
                  <option value="other">{t('static.contact.form.subject.other', 'Other')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('static.contact.form.message', 'Message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={t('static.contact.form.message.placeholder', 'Tell us how we can help you...')}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting 
                  ? t('static.contact.form.submitting', 'Sending...') 
                  : t('static.contact.form.submit', 'Send Message')
                }
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
