import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('static.privacy.title', 'Privacy Policy')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section1.title', '1. Information We Collect')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.privacy.section1.content', 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.privacy.section1.list1', 'Name and contact information (email address, phone number, mailing address)')}</li>
              <li>{t('static.privacy.section1.list2', 'Payment information (credit card details, billing address)')}</li>
              <li>{t('static.privacy.section1.list3', 'Account credentials (username, password)')}</li>
              <li>{t('static.privacy.section1.list4', 'Communications with us (customer service inquiries, feedback)')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section2.title', '2. How We Use Your Information')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.privacy.section2.content', 'We use the information we collect to:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.privacy.section2.list1', 'Process and fulfill your orders')}</li>
              <li>{t('static.privacy.section2.list2', 'Provide customer support and respond to your inquiries')}</li>
              <li>{t('static.privacy.section2.list3', 'Send you important information about your account and orders')}</li>
              <li>{t('static.privacy.section2.list4', 'Improve our products and services')}</li>
              <li>{t('static.privacy.section2.list5', 'Send you marketing communications (with your consent)')}</li>
              <li>{t('static.privacy.section2.list6', 'Comply with legal obligations')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section3.title', '3. Information Sharing')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.privacy.section3.content', 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.privacy.section3.list1', 'With service providers who assist us in operating our website and conducting our business')}</li>
              <li>{t('static.privacy.section3.list2', 'When required by law or to protect our rights')}</li>
              <li>{t('static.privacy.section3.list3', 'In connection with a business transfer or acquisition')}</li>
              <li>{t('static.privacy.section3.list4', 'With your explicit consent')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section4.title', '4. Data Security')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.privacy.section4.content', 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section5.title', '5. Cookies and Tracking')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.privacy.section5.content', 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section6.title', '6. Your Rights')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.privacy.section6.content', 'You have the right to:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.privacy.section6.list1', 'Access and update your personal information')}</li>
              <li>{t('static.privacy.section6.list2', 'Request deletion of your personal information')}</li>
              <li>{t('static.privacy.section6.list3', 'Opt out of marketing communications')}</li>
              <li>{t('static.privacy.section6.list4', 'Request a copy of your data')}</li>
              <li>{t('static.privacy.section6.list5', 'Withdraw consent for data processing')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section7.title', '7. Children\'s Privacy')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.privacy.section7.content', 'Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section8.title', '8. Changes to This Policy')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.privacy.section8.content', 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. We encourage you to review this privacy policy periodically for any changes.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.privacy.section9.title', '9. Contact Us')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.privacy.section9.content', 'If you have any questions about this privacy policy or our data practices, please contact us at:')}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@fabbhome.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Design Street, Creative City, CC 12345
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
