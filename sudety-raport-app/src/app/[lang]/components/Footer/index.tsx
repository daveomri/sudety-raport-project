import React from 'react'
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://sudetyraport.com' className='flex items-center'>
            <Image width='90' height='390' src='/logo_sr.png' alt='sudety-raport-logo' />
            <span className='self-center text-2xl font-serif font-thin ml-2 text-pretty whitespace-nowrap dark:text-white'>SUDETY RAPORT</span>
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Support Us</h2>
              <ul className='text-gray:500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='https://buymeacoffee.com/sudetyraport' target='_blank' className='hover:underline font-medium hover:text-red-600 text-red-400'>Buy me a coffee</a>
                </li>
                <li>
                  <a href='#' target='_blank' className='hover:underline'>Patreon</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Get More
              </h2>
              <ul className='text-gray-500 dark: text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='#' target='_blank' className='hover:underline'>Merch</a>
                </li>
                <li className='mb-4'>
                  <a href='#' target='_blank' className='hover:underline'>Podcast</a>
                </li>
                <li className='mb-4'>
                  <a href='#' target='_blank' className='hover:underline'>Newsletter</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Follow Us</h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='#' target='_blank'className='hover:underline'>Instagram</a>
                </li>
                <li className='mb-4'>
                  <a href='#' target='_blank' className='hover:underline'>Twitter</a>
                </li>
                <li className='mb-4'>
                  <a href='#' target='_blank' className='hover:underline'>Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2024 <a href='https://sudetyraport.com/' className='hover:underline text-purple-500'><span className='text-yellow-200'>Sudety</span> Raport</a> & <a href='https://daveomri.github.io/portfolio/' className='hover:underline text-pink-300'>Omrai</a>. All Rights Reserved.
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
              <a href='#' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                  <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 8 19'>
                        <path fillRule='evenodd' d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z' clipRule='evenodd'/>
                    </svg>
                  <span className='sr-only'>Facebook page</span>
              </a>
              <a href='#' target='_blank' className='fill-gray-500 hover:fill-text-gray-900 dark:hover:fill-white ms-5'>
                <svg className='w-4 h-4' width="20" height="20" viewBox="0 0 0.4 0.4" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h.4v.4H0z"/><path d="M.2.1a.1.1 0 1 0 0 .2.1.1 0 0 0 0-.2m0 .15C.172.25.15.228.15.2S.172.15.2.15.25.172.25.2.228.25.2.25M.275 0h-.15A.125.125 0 0 0 0 .125v.15C0 .344.056.4.125.4h.15A.125.125 0 0 0 .4.275v-.15A.125.125 0 0 0 .275 0M.35.275A.076.076 0 0 1 .275.35h-.15A.076.076 0 0 1 .05.275v-.15C.05.084.084.05.125.05h.15C.316.05.35.084.35.125zM.3.075a.025.025 0 1 0 0 .05.025.025 0 1 0 0-.05"/>
                </svg>
                <span className='sr-only'>Instagram</span>
              </a>
              <a href='#' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
                  <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 21 16'>
                        <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z'/>
                    </svg>
                  <span className='sr-only'>Discord community</span>
              </a>
              <a href='#' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
                  <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 17'>
                    <path fillRule='evenodd' d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z' clipRule='evenodd'/>
                </svg>
                  <span className='sr-only'>Twitter page</span>
              </a>
              <a href='#' target='_blank' className='fill-gray-500 hover:fill-text-gray-900 dark:hover:fill-white ms-5'>
                <svg className='w-4 h-4' width="22" height="22" viewBox="0 0 0.6 0.6" fillRule='evenodd' clipRule='evenodd' xmlns="http://www.w3.org/2000/svg">
                  <path d="M.174.388a.07.07 0 0 0 .07.07.07.07 0 0 0 .072-.069L.318.075h.064a.12.12 0 0 0 .11.107v.075L.481.258a.12.12 0 0 1-.1-.054v.185A.137.137 0 1 1 .244.252h.008V.32L.244.319a.07.07 0 0 0-.07.07"/>
                </svg>
                <span className='sr-only'>Tiktok</span>
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
