import React, { useState } from 'react';
import Logo from '../assets/logo.png'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-inherit">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-auto transition-transform transform hover:scale-110" src={Logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-sm font-semibold leading-6 text-text hover:text-primary">
              Home
            </a>
            <a href="/courses" className="text-sm font-semibold leading-6 text-text hover:text-primary">
              Courses
            </a>
            <a href="/aboutus" className="text-sm font-semibold leading-6 text-text hover:text-primary">
              About Us
            </a>
            <a href="/contactus" className="text-sm font-semibold leading-6 text-text hover:text-primary">
              Contact Us
            </a>
            <a href="/mydashboard" className="text-sm font-semibold leading-6 text-text hover:text-primary">
              My Dashboard
            </a>
            <a href="/newsletter" className="text-sm font-semibold leading-6 text-text hover:text-primary">
              Newsletter
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login-register" className="text-sm font-semibold leading-6 text-text">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50" onClick={closeMobileMenu}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt=""
                  />
                </a>
                <button onClick={closeMobileMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">
                      Home
                    </a>
                    <a href="/courses" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">
                      Courses
                    </a>
                    <a href="/aboutus" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">
                      About Us
                    </a>
                    <a href="contactus" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">
                      Contact Us
                    </a>
                    <a href="mydashboard" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">
                      My Dashboard
                    </a>
                    <a href="newsletter" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">
                      Newsletter
                    </a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-text hover:text-accent">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
