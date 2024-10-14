// import Link from 'next/link';

// const EN_Button = () => {
//   return (
//     <div className="px-8 py-3">
//       <div className="grid gap-8 items-start justify-center">
//         <div className="relative group">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//           <Link href="/EN"> 
//             <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
//               <span className="flex items-center space-x-5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-pink-600 -rotate-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//                   />
//                 </svg>
//                 <span className="px-20 py-20 text-gray-100 font-extrabold text-3xl">EN calculator</span>
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EN_Button;

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  className?: string; // Optional className prop
}

const EN_Button: React.FC<ButtonProps> = ({ className }) => {
  return (
    <div className={`px-8 py-3 ${className}`}>
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Link href="/EN">
            <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-pink-600 -rotate-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="px-32 py-32 text-gray-100 font-extrabold text-5xl">
                  EN Calculator
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EN_Button;

