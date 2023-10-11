import React, { useState } from 'react';

function Faq() {
  const [showMenu, setShowMenu] = useState([false, false, false]);

  const toggleMenu = (index) => {
    // Toggle the visibility of the menu for the clicked question
    const updatedShowMenu = [...showMenu];
    updatedShowMenu[index] = !updatedShowMenu[index];
    setShowMenu(updatedShowMenu);
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-36 px-4 relative">
      <div className="gradient-overlay"></div>
      {/* Your content goes here */}
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        FAQ's
      </h1>
      <div className="lg:w-8/12 w-full mx-auto">
        {/* Question 1 */}
        <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
        <div className="w-full md:px-6">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> What is StudyNest
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => toggleMenu(0)}
            >
              <img
                className="transform dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                className="transform dark:block hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                alt="toggler"
              />
            </button>
          </div>
          {showMenu[0] && (
            <div className="mt-6 w-full">
              <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                StudyNest is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On StudyNest, you’ll find inspiration from hands-on classes and teachers at the top of their creative fields, so you can take the next step in your creative journey.
              </p>
            </div>
          )}
        </div>
        {/* Repeat the above code for other questions */}
        {/* ... */}
      </div>
    </div>
  );
}

export default Faq;
