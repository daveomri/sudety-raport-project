"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// todo create a function for the links and links that will be translated use keywords

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHelper = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='sticky top-0'>
        <nav className='bg-black sticky w-full top-0 left-0'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
                      <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                        One
                      </Link>
                      <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Two
                      </Link>
                      <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                        Three
                      </Link>
                    </div>
                  </div>
                  <div className='md:hidden  flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white' onClick={isOpenHelper}>
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
                      <Link href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2 text-center">
                        One
                      </Link>
                      <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 block text-center">
                        Two
                      </Link>
                      <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 block text-center">
                        Three
                      </Link>
                  </div>
                </div>
              )
            }
        </nav>
    </header>
  )
}