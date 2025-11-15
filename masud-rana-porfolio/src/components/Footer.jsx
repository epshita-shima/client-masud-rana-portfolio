import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Main Footer - Light Version */}
      <footer className="footer sm:footer-horizontal bg-white text-base-content p-10 border-t border-gray-200">
        <aside>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#940000] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">MR</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Masud Rana</h3>
              <p className="text-gray-600">Professional Graphic Designer</p>
            </div>
          </div>
          <p className="text-gray-600 max-w-xs">
            Creating stunning visual identities that help brands stand out. 
            Specialized in logo design, branding, and digital graphics since 2015.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://x.com/MasudRana0161" className="text-gray-500 hover:text-[#940000] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
         
            <a href="https://www.facebook.com/profile.php?id=61580500531550" className="text-gray-500 hover:text-[#940000] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>

            <a href="http://linkedin.com/in/masud-rana-a6821512a" className="text-gray-500 hover:text-[#940000] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </aside>
        
        <nav>
          <h6 className="footer-title text-gray-800">Design Services</h6>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Logo Design</a>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Brand Identity</a>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Business Cards</a>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Social Media Graphics</a>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Banner Design</a>
        </nav>
        
        <nav>
          <h6 className="footer-title text-gray-800">Quick Links</h6>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Portfolio</a>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">About Me</a>
          
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Testimonials</a>
          <a className="link link-hover text-gray-600 hover:text-[#940000] transition-colors">Blog</a>
        </nav>
        
        <nav>
          <h6 className="footer-title text-gray-800">Contact Info</h6>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+880 1680-128589</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>admin1@mrmasudranabd.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title text-gray-800">Business Hours</h6>
          <div className="space-y-1 text-gray-600 text-sm">
            <div className="flex justify-between">
              <span>Sat - Thu:</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday:</span>
              <span>Closed</span>
            </div>
            <div className="mt-3">
              <span className="text-[#940000] font-semibold">24/7 Support Available</span>
            </div>
          </div>
        </nav>
      </footer>

      {/* Copyright Footer - Light Version */}
      <footer className="footer sm:footer-horizontal footer-center bg-gray-50 text-base-content p-4 border-t border-gray-200">
        <aside>
          <p className="text-gray-600">
            Copyright © {new Date().getFullYear()} - 
            <span className="text-[#940000] font-semibold"> All rights reserved by Masud Rana</span> | 
            Professional Graphic Designer
          </p>
        </aside>
        <nav className="hidden sm:block">
          <div className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-[#940000] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#940000] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#940000] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#940000] transition-colors">Sitemap</a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;