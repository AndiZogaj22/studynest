import React from 'react';
import adobeImage from '../assets/adobe.PNG';
import amazonImage from '../assets/amazon.PNG';
import appleImage from '../assets/apple.PNG';
import ibmImage from '../assets/ibm.PNG';
import microsoftImage from '../assets/microsoft.PNG';
import teslaImage from '../assets/tesla.PNG';
import '../partners.css';

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="2xl:mx-auto 2xl:container py-48 lg:px-20 md:px-6 px-4">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl dark:text-white font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
              Our Trusted Partners
            </h1>
            <p className="text-base leading-6 dark:text-gray-400 text-center text-gray-600 w-full md:w-10/12">
              We just got featured in the following magazines, and it has been the most incredible journey. We work with the best fashion magazines across the world
            </p>
          </div>

          <div className="flex justify-around w-full mt-10">
            <div className="partner-item">
              <img src={adobeImage} alt="Adobe" />
            </div>
            <div className="partner-item">
              <img src={amazonImage} alt="Amazon" />
            </div>
            
            <div className="partner-item">
              <img src={ibmImage} alt="IBM" />
            </div>
            <div className="partner-item">
              <img src={microsoftImage} alt="Microsoft" />
            </div>
            <div className="partner-item">
              <img src={teslaImage} alt="Tesla" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
