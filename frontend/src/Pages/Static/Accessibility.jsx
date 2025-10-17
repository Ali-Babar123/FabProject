import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Accessibility = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('static.accessibility.title', 'Accessibility Statement')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section1.title', 'Our Commitment')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.accessibility.section1.content', 'FabbHome is committed to ensuring digital accessibility for all users, including those with disabilities. We strive to provide a website that is accessible to the widest possible audience, regardless of technology or ability.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section2.title', 'Accessibility Standards')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.accessibility.section2.content', 'We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our website includes:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.accessibility.section2.list1', 'Alternative text for images and graphics')}</li>
              <li>{t('static.accessibility.section2.list2', 'Keyboard navigation support')}</li>
              <li>{t('static.accessibility.section2.list3', 'High contrast color schemes')}</li>
              <li>{t('static.accessibility.section2.list4', 'Readable fonts and text sizing')}</li>
              <li>{t('static.accessibility.section2.list5', 'Screen reader compatibility')}</li>
              <li>{t('static.accessibility.section2.list6', 'Focus indicators for interactive elements')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section3.title', 'Assistive Technologies')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.accessibility.section3.content', 'Our website is designed to work with various assistive technologies, including screen readers, voice recognition software, and keyboard-only navigation. We test our site regularly with these tools to ensure compatibility.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section4.title', 'Ongoing Improvements')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.accessibility.section4.content', 'We continuously work to improve the accessibility of our website. This includes regular audits, user testing with people with disabilities, and implementing feedback from our users.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section5.title', 'Feedback and Support')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.accessibility.section5.content', 'If you encounter any accessibility barriers on our website or have suggestions for improvement, please contact us:')}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> accessibility@fabbhome.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>TTY:</strong> +1 (555) 123-4568
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section6.title', 'Third-Party Content')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.accessibility.section6.content', 'Some content on our website may be provided by third parties. While we strive to ensure all content meets accessibility standards, we cannot guarantee the accessibility of third-party content. If you encounter issues with third-party content, please let us know.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section7.title', 'Alternative Formats')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.accessibility.section7.content', 'If you need information from our website in an alternative format, such as large print, audio, or braille, please contact us and we will work with you to provide the information in your preferred format.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.accessibility.section8.title', 'Last Updated')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.accessibility.section8.content', 'This accessibility statement was last updated on December 1, 2024. We will update this statement as we make improvements to our website\'s accessibility.')}
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Accessibility;
