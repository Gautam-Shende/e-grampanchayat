const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 border-t border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        
        {/* Company Info */}
        <div className="col-span-2 md:col-span-1 space-y-3">
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Digital e-Gram Panchayat
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm">
            Empowering rural communities through digital governance.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Services</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Certificates</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Applications</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Grievances</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Schemes</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Contact</h4>
          <ul className="mt-2 space-y-1">
            <li className="flex items-start text-gray-400 text-xs sm:text-sm">
              <svg className="h-4 w-4 mt-0.5 mr-1.5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 1234567890
            </li>
            <li className="flex items-start text-gray-400 text-xs sm:text-sm">
              <svg className="h-4 w-4 mt-0.5 mr-1.5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@digitalpanchayat.gov
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Digital e-Gram Panchayat. All rights reserved.
        </p>
        <div className="mt-1 flex flex-wrap justify-center space-x-3 text-xs">
          <a href="#" className="text-gray-500 hover:text-gray-300">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-gray-300">Terms</a>
          <a href="#" className="text-gray-500 hover:text-gray-300">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer