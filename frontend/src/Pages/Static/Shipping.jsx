import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Shipping = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('static.shipping.title', 'Shipping Information')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section1.title', 'Shipping Options')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.shipping.section1.standard.title', 'Standard Shipping')}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t('static.shipping.section1.standard.description', '5-7 business days')}
                </p>
                <p className="text-sm text-gray-500">
                  {t('static.shipping.section1.standard.price', 'Free on orders over $75')}
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t('static.shipping.section1.express.title', 'Express Shipping')}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t('static.shipping.section1.express.description', '2-3 business days')}
                </p>
                <p className="text-sm text-gray-500">
                  {t('static.shipping.section1.express.price', '$15.99')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section2.title', 'Processing Time')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.shipping.section2.content', 'All orders are processed within 1-2 business days. Custom orders may take 3-5 business days to process. You will receive a confirmation email with tracking information once your order ships.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section3.title', 'Shipping Destinations')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.shipping.section3.content', 'We currently ship to the following locations:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.shipping.section3.list1', 'United States (all 50 states)')}</li>
              <li>{t('static.shipping.section3.list2', 'Canada')}</li>
              <li>{t('static.shipping.section3.list3', 'United Kingdom')}</li>
              <li>{t('static.shipping.section3.list4', 'Australia')}</li>
              <li>{t('static.shipping.section3.list5', 'European Union countries')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section4.title', 'Special Handling')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.shipping.section4.content', 'Some items require special handling:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.shipping.section4.list1', 'Large wallpaper rolls are shipped in protective tubes')}</li>
              <li>{t('static.shipping.section4.list2', 'Fragile items are carefully packaged with extra protection')}</li>
              <li>{t('static.shipping.section4.list3', 'Custom orders may require additional processing time')}</li>
              <li>{t('static.shipping.section4.list4', 'Oversized items may incur additional shipping charges')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section5.title', 'Tracking Your Order')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.shipping.section5.content', 'Once your order ships, you will receive a tracking number via email. You can track your package using the provided tracking number on the carrier\'s website. For any shipping inquiries, please contact our customer service team.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section6.title', 'International Shipping')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('static.shipping.section6.content', 'International orders may be subject to:')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('static.shipping.section6.list1', 'Customs duties and taxes')}</li>
              <li>{t('static.shipping.section6.list2', 'Additional processing time')}</li>
              <li>{t('static.shipping.section6.list3', 'Restrictions on certain products')}</li>
              <li>{t('static.shipping.section6.list4', 'Higher shipping costs')}</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              {t('static.shipping.section6.note', 'Please note that customs duties and taxes are the responsibility of the recipient.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('static.shipping.section7.title', 'Contact Us')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('static.shipping.section7.content', 'If you have any questions about shipping or need assistance with your order, please contact us at:')}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> shipping@fabbhome.com<br />
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

export default Shipping;
