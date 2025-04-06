import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Car Shop',
  description: 'Buy your dream car or parts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="p-4 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
