import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Returns = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('static.returns.title', 'Returns & Exchanges')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section1.title', 'Return Policy')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.returns.section1.content', 'We want you to love your FabbHome products. If you\'re not completely satisfied, you may return most items within 30 days of delivery for a full refund or exchange.')}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>{t('static.returns.section1.note', 'Note:')}</strong> {t('static.returns.section1.noteContent', 'Custom orders, personalized items, and clearance items are final sale and cannot be returned.')}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section2.title', 'Return Conditions')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.returns.section2.content', 'To be eligible for a return, items must:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.returns.section2.list1', 'Be in original, unused condition')}</li>
              <li>{t('static.returns.section2.list2', 'Have original packaging and tags')}</li>
              <li>{t('static.returns.section2.list3', 'Be returned within 30 days of delivery')}</li>
              <li>{t('static.returns.section2.list4', 'Not be custom or personalized items')}</li>
              <li>{t('static.returns.section2.list5', 'Not be clearance or sale items')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section3.title', 'How to Return')}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t('static.returns.section3.step1.title', 'Contact Us')}
                  </h3>
                  <p className="text-gray-600">
                    {t('static.returns.section3.step1.content', 'Email us at returns@fabbhome.com or call (555) 123-4567 to initiate your return.')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t('static.returns.section3.step2.title', 'Get Return Authorization')}
                  </h3>
                  <p className="text-gray-600">
                    {t('static.returns.section3.step2.content', 'We\'ll provide you with a Return Merchandise Authorization (RMA) number and return instructions.')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t('static.returns.section3.step3.title', 'Package & Ship')}
                  </h3>
                  <p className="text-gray-600">
                    {t('static.returns.section3.step3.content', 'Package the item securely and ship it back using the provided return label or your preferred carrier.')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t('static.returns.section3.step4.title', 'Receive Refund')}
                  </h3>
                  <p className="text-gray-600">
                    {t('static.returns.section3.step4.content', 'Once we receive and inspect your return, we\'ll process your refund within 5-7 business days.')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section4.title', 'Return Shipping')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.returns.section4.content', 'Return shipping costs depend on the reason for return:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.returns.section4.list1', 'Defective or damaged items: We cover return shipping')}</li>
              <li>{t('static.returns.section4.list2', 'Wrong item sent: We cover return shipping')}</li>
              <li>{t('static.returns.section4.list3', 'Change of mind: Customer pays return shipping')}</li>
              <li>{t('static.returns.section4.list4', 'Size exchanges: We cover return shipping for the first exchange')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section5.title', 'Exchanges')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.returns.section5.content', 'We\'re happy to help you find the perfect item. Exchanges are subject to:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.returns.section5.list1', 'Availability of the desired item')}</li>
              <li>{t('static.returns.section5.list2', 'Price difference (if applicable)')}</li>
              <li>{t('static.returns.section5.list3', 'Same return conditions as regular returns')}</li>
              <li>{t('static.returns.section5.list4', 'Processing time of 5-7 business days')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section6.title', 'Refund Processing')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.returns.section6.content', 'Refunds will be processed to the original payment method within 5-7 business days after we receive your return. You\'ll receive an email confirmation once the refund is processed.')}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>{t('static.returns.section6.note', 'Note:')}</strong> {t('static.returns.section6.noteContent', 'Bank processing times may vary. Please allow 1-2 additional business days for the refund to appear in your account.')}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section7.title', 'Damaged or Defective Items')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.returns.section7.content', 'If you receive a damaged or defective item, please contact us immediately with photos of the damage. We\'ll arrange for a replacement or full refund at no cost to you.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.returns.section8.title', 'Contact Us')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.returns.section8.content', 'Questions about returns or exchanges? We\'re here to help:')}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> returns@fabbhome.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
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

export default Returns;
