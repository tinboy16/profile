import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import AdBanner from './components/AdBanner'; // ✅ Thêm dòng này

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tin Nguyen',
  description: 'Nguyen Thuong Tin Profile',
};

const GA_TRACKING_ID = 'G-9X3YKECFCL';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
<body className={`${inter.className} pt-[60px] md:pt-[80px]`}>
        <AdBanner /> {/* ✅ Gắn banner trên cùng */}
        {children}
      </body>
    </html>
  );
}
