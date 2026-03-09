import Navbar from '@/components/Navbar/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}