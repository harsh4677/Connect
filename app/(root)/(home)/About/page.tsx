// pages/about.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="px-8 py-32">
      <div className="flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-10 py-16 bg-slate-950 rounded-lg leading-none flex flex-col items-center shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4 ">About Us</h2>
            <p className="text-white text-lg mb-4">
              We are dedicated to enhancing patient care through innovative nutritional solutions. Our Enteral Nutrition (EN) and Parenteral Nutrition (PN) calculator is designed to provide healthcare professionals with the tools they need to accurately assess and meet the nutritional requirements of patients receiving specialized nutrition support.
            </p>
            <p className="text-white text-lg mb-4">
              Our calculator simplifies the process of determining nutritional needs for both enteral and parenteral nutrition. With a focus on delivering precise calculations tailored to each patient's individual condition, metabolism, and overall health status, we empower healthcare providers to make informed decisions about nutrition therapy.
            </p>
            <p className="text-white text-xl mb-4">
              <strong className='text-blue-500'>Enteral Nutrition (EN)</strong> is vital for patients who can digest and absorb nutrients but cannot eat orally. Our EN calculator helps clinicians determine the optimal amount of calories, protein, and fluids necessary for effective tube feeding formulations, ensuring that patients receive the essential nutrients they need to thrive.
            </p>
            <p className="text-white text-xl mb-4">
              <strong className='text-blue-500'>Parenteral Nutrition (PN)</strong> is critical for patients who are unable to receive nutrition through the digestive tract. Our PN calculator assists in calculating the precise nutrients—including calories, proteins, fats, vitamins, and minerals—required for intravenous feeding, supporting patients in critical care and those with complex health conditions.
            </p>
            <p className="text-white text-xl mb-4 ">
              <strong className='text-blue-500'>Our Mission</strong><br />
              We aim to provide reliable, user-friendly tools that enhance the quality of care for patients reliant on enteral and parenteral nutrition. By collaborating with healthcare professionals, we continuously refine our calculators to ensure they meet the evolving needs of medical practice and patient care.
            </p>
            <p className="text-white text-lg">
              Join us in our commitment to advancing nutritional therapy and improving health outcomes for patients around the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
