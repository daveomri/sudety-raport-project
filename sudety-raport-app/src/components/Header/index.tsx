"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';

const categories: {
  key: string;
  subpath: '/categories';
}[] = [
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

const pages: {
  key: string;
  subpath: "/pages";
}[] = [
  {
    key: 'about-us',
    subpath: "/pages"
  }
];

// const createLinks = (navBar: NavBar) => {
//   return navBar.map((item) => {
//     return <Link href={`${item.subpath}/${item.key}`} className="text-white block hover:bg-white hover:text-black rounded-lg p-2 text-center">{item.value}</Link>;
//   });
// };

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  const isOpenHelper = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm bg-[rgba(17,24,39,0.5)]'>
        <nav className='sticky w-full top-0 left-0'>
            <div className='mx-auto px-3 sm:px-5 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <Link href="/" className='text-white'>
                        <Image width='90' height='50' src='/logo.png' alt='site-logo' />
                      </Link>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                      <ul className='flex'>
                        {
                          categories.map((item) => {
                            return (
                              <li key={`${item.key}-top`}>
                                <Link href={{
                                  pathname: `${item.subpath}/[categoryId]`,
                                  params: {
                                    categoryId: item.key
                                  }
                                }} className="hover:text-purple-600 text-white block rounded-lg p-2 text-center text-xs uppercase">{t(item.key)}</Link>
                              </li>
                            );
                          })
                        }
                        {
                          pages.map((item) => {
                            return (
                              <li key={`${item.key}-top`}>
                                <Link href={{
                                  pathname: `${item.subpath}/[pageId]`,
                                  params: {
                                    pageId: item.key
                                  }
                                }} className="hover:text-purple-600 text-white block rounded-lg p-2 text-center text-xs uppercase">{t(item.key)}</Link>
                              </li>
                            );
                          })
                        }
                      </ul>
                      <LocaleSwitcher />
                    </div>
                  </div>
                  <div className='md:hidden  flex items-center'>
                    <LocaleSwitcher />
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-purple-800 md:text-purple-800 hover:text-purple-400 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white' onClick={isOpenHelper}>
                      {
                        isOpen ? (
                          <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        ) : (
                          <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16m-7 6h7"/>
                          </svg>
                        )
                      }
                    </button>
                  </div>
                </div>
            </div>
            {
              isOpen && (
                <div className='md:hidden'>
                  <div className='px-2 py-2 space-y-1 sm:px3'>
                    <ul>
                      {
                        categories.map((item) => {
                          return (
                            <li key={`${item.key}-bottom`}>
                              <Link href={{
                                  pathname: `${item.subpath}/[categoryId]`,
                                  params: {
                                    categoryId: item.key
                                  }
                                }} className="text-white block hover:bg-white hover:bg-opacity-20 hover:backdrop-invert hover:text-black p-2 text-center hover:rounded uppercase">
                                {t(item.key)}
                              </Link>
                            </li>
                          );
                        })
                      }
                      {
                          pages.map((item) => {
                            return (
                              <li key={`${item.key}-bottom`}>
                                <Link href={{
                                    pathname: `${item.subpath}/[pageId]`,
                                    params: {
                                      pageId: item.key
                                    }
                                  }} className="text-white block hover:bg-white hover:bg-opacity-20 hover:backdrop-invert hover:text-black p-2 text-center hover:rounded uppercase">
                                  {t(item.key)}
                                </Link>
                              </li>
                            );
                          })
                        }
                    </ul>
                  </div>
                </div>
              )
            }
        </nav>
    </header>
  )
}
