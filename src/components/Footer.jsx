import React from 'react';
    import { MapPin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-gray-800 text-gray-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-white">EasyLoan</span>
                  <span className="text-2xl font-light text-gray-400">Now</span>
                </div>
                <p className="text-sm text-gray-400 max-w-md">
                  Disclaimer: EasyLoan Now is a loan aggregator and is authorized to provide services on behalf of its partners. We help you find the best loan offers from our network of trusted lenders.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-4">Our Location</p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 text-blue-400 flex-shrink-0" />
                  <p className="text-sm text-gray-400">
                    EasyLoan Marketing & Consulting Pvt. Ltd.
                    <br />
                    135 P, Sector 44, Gurugram (HR) 122001
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} EasyLoan Now. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;