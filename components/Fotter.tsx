import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';


export default function FooterCom() {
  return (
    <footer className='border border-t-8 border-blue-950 bg-dark-1 dark:bg-gray-900 rounded-md'>
      <div className='w-full max-w-7xl mx-auto p-4'>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <div className='mt-5'>
            <Link href='/' passHref>
              <span className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                  Anoushka
                </span>
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <h5 className='text-lg font-medium text-white'>About</h5>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a
                    href='/About'
                    target='_blank'
                    rel='noopener noreferrer'
                    className=' text-white hover:underline'
                  >
                    About US
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-lg font-medium text-white'>Follow us</h5>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:underline'
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:underline'
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-lg font-medium text-white'>Legal</h5>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-white hover:underline'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:underline'
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-300 dark:border-gray-700 pt-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <span className='text-white text-sm'>
              &copy; {new Date().getFullYear()} Anoushka. All rights reserved.
            </span>
            <div className='flex mt-4 sm:mt-0 space-x-6'>
              <a href='#' className='text-white'>
                <BsInstagram size={24} />
              </a>
              <a href='#' className='text-white'>
                <BsTwitter size={24} />
              </a>
              <a
                href='#'
                className='text-white'
              >
                <BsGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
