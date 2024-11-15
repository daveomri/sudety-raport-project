import type { Metadata } from "next";
import localFont from "next/font/local";

import { Locale, getDictionary } from './dictionaries';
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
  description: "todo",
};

export const categories = [
  { 
    key: "rap_weekly",
    value: "rap weekly",
    subpath: "/categories"
   },
  { 
    key: "rap-tales",
    value: "rap tales",
    subpath: "/categories"
   },
  { 
    key: "playlists",
    value: "playlists",
    subpath: "/categories"
  },
  { 
    key: "best_of",
    value: "best of",
    subpath: "/categories"
  },
  { 
    key: "uncategorized",
    value: "uncategorized",
    subpath: "/categories"
  }
];

export const navBar = [
  ...categories,
  {
    key: 'about-us',
    value: 'about us',
    subpath: "/pages"
  }
];

const translateNavBar = (translator: {[key: string]: string}, lang: string) => {
  if (lang == 'en') {
    return navBar;
  }
  return navBar.map((item) => {
    return {key: translator[item.key], value: translator[item.value], subpath: item.subpath};
  });
};

export default async function Root({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const intl = await getDictionary(lang);

  return (
    <html lang={ lang }>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header navBar={translateNavBar(intl, lang)} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'cs-CZ' }];
}
