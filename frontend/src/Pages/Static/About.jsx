import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('static.about.title', 'About FabbHome')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.about.section1.title', 'Our Story')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.about.section1.content', 'FabbHome was born from a passion for beautiful, high-quality home decor that transforms living spaces. We believe that every home deserves to reflect the unique personality and style of its inhabitants. Our carefully curated collection of wallpapers, murals, curtains, and furnishings brings together timeless design with modern functionality.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.about.section2.title', 'Our Mission')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.about.section2.content', 'To inspire and empower homeowners to create beautiful, personalized spaces through exceptional design products and outstanding customer service. We strive to make high-quality home decor accessible to everyone, regardless of budget or design experience.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.about.section3.title', 'What We Offer')}
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.about.section3.list1', 'Premium wallpapers in a variety of patterns and textures')}</li>
              <li>{t('static.about.section3.list2', 'Custom murals for statement walls')}</li>
              <li>{t('static.about.section3.list3', 'Elegant curtains and window treatments')}</li>
              <li>{t('static.about.section3.list4', 'Quality furnishings and home accessories')}</li>
              <li>{t('static.about.section3.list5', 'Design consultation services')}</li>
              <li>{t('static.about.section3.list6', 'Professional installation support')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.about.section4.title', 'Our Values')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.about.section4.quality.title', 'Quality')}
                </h3>
                <p className="text-gray-600">
                  {t('static.about.section4.quality.content', 'We source only the finest materials and work with trusted manufacturers to ensure every product meets our high standards.')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.about.section4.innovation.title', 'Innovation')}
                </h3>
                <p className="text-gray-600">
                  {t('static.about.section4.innovation.content', 'We stay ahead of design trends and continuously expand our collection with fresh, contemporary pieces.')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.about.section4.service.title', 'Customer Service')}
                </h3>
                <p className="text-gray-600">
                  {t('static.about.section4.service.content', 'Our dedicated team is here to help you every step of the way, from selection to installation.')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.about.section4.sustainability.title', 'Sustainability')}
                </h3>
                <p className="text-gray-600">
                  {t('static.about.section4.sustainability.content', 'We are committed to environmentally responsible practices and sustainable sourcing.')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.about.section5.title', 'Contact Us')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.about.section5.content', 'We\'d love to hear from you! Whether you have questions about our products, need design advice, or want to share your feedback, we\'re here to help.')}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> hello@fabbhome.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Design Street, Creative City, CC 12345<br />
                <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
