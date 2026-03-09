import Navbar from '@/components/Navbar/Navbar';
export const metadata = {
  metadataBase: new URL('https://saint-marc-magazine.vercel.app'),
  title: 'سان مارك | منصة الريادة ',
  description: 'المنصة الإعلامية الرسمية لطلاب مدرسة سان مارك بالإسكندرية - بصمة طالب.. فكر جيل.',
  openGraph: {
    title: 'منصة الريادة - مدرسة سان مارك',
    description: 'صوت الطالب ومرآة الإبداع. تابع أحدث أخبار وفعاليات مدرسة سان مارك.',
    url: 'https://saint-marc-magazine.vercel.app',
    siteName: 'الريادة',
    images: [
      {
        url: 'https://saint-marc-magazine.vercel.app/images/icon.png', 
        width: 1200,
        height: 630,
        alt: 'شعار منصة الريادة',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'منصة الريادة | سان مارك',
    description: 'المنصة الإعلامية الرسمية لطلاب مدرسة سان مارك',
    images: ['https://saint-marc-magazine.vercel.app/images/icon.png'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" prefix="og: https://ogp.me/ns#">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}