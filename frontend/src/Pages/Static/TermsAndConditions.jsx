import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('static.terms.title', 'Terms and Conditions')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section1.title', '1. Acceptance of Terms')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section1.content', 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section2.title', '2. Use License')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.terms.section2.content', 'Permission is granted to temporarily download one copy of the materials on FabbHome\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.terms.section2.list1', 'modify or copy the materials')}</li>
              <li>{t('static.terms.section2.list2', 'use the materials for any commercial purpose or for any public display')}</li>
              <li>{t('static.terms.section2.list3', 'attempt to reverse engineer any software contained on the website')}</li>
              <li>{t('static.terms.section2.list4', 'remove any copyright or other proprietary notations from the materials')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section3.title', '3. Disclaimer')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section3.content', 'The materials on FabbHome\'s website are provided on an \'as is\' basis. FabbHome makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section4.title', '4. Limitations')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section4.content', 'In no event shall FabbHome or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FabbHome\'s website, even if FabbHome or a FabbHome authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section5.title', '5. Accuracy of Materials')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section5.content', 'The materials appearing on FabbHome\'s website could include technical, typographical, or photographic errors. FabbHome does not warrant that any of the materials on its website are accurate, complete, or current. FabbHome may make changes to the materials contained on its website at any time without notice. However, FabbHome does not make any commitment to update the materials.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section6.title', '6. Links')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section6.content', 'FabbHome has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FabbHome of the site. Use of any such linked website is at the user\'s own risk.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section7.title', '7. Modifications')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section7.content', 'FabbHome may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.terms.section8.title', '8. Governing Law')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.terms.section8.content', 'These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.')}
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
