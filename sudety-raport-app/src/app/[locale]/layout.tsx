import type { Metadata } from "next";
import localFont from "next/font/local";
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sudety Raport",
  description: "Encyklopedie RAPU. Největší poklady napříč historií a všemi subžánry. Zásadní alba scény + výběr nejlepších desek měsíce, playlisty a recenze.",
};

export const categories = [
  { 
    key: "rap_weekly",
    subpath: "/categories"
   },
  { 
    key: "rap-tales",
    subpath: "/categories"
   },
  { 
    key: "playlists",
    subpath: "/categories"
  },
  { 
    key: "best_of",
    subpath: "/categories"
  },
  { 
    key: "uncategorized",
    subpath: "/categories"
  }
];

export const navBar = [
  ...categories,
  {
    key: 'about-us',
    subpath: "/pages"
  }
];

// const translateNavBar = (translator: {[key: string]: string}, lang: string) => {
//   if (lang == 'en') {
//     return navBar;
//   }
//   return navBar.map((item) => {
//     return {key: translator[item.key], value: translator[item.value], subpath: item.subpath};
//   });
// };

export default async function LocaleLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "cs-CZ")) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={ locale }>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header navBar={navBar} />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// export async function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'cs-CZ' }];
// }
