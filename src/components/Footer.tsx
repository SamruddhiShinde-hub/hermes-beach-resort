import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              Hermes
            </h3>
            <p className="text-white/80 mb-4">Resort & Spa</p>
            <p className="text-sm text-white/60">
              Experience luxury beachside living in the heart of Udupi, Karnataka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms" className="text-sm text-white/70 hover:text-white transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-sm text-white/70 hover:text-white transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/weddings-meetings" className="text-sm text-white/70 hover:text-white transition-colors">
                  Weddings & Events
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-sm text-white/70 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-white/70 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/70">
                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Kadike Beach Road, Udupi, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70">
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div>+91 88303 14806</div>
                  <div>+91 84848 25155</div>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:sales@hermeshotels.com" className="hover:text-white transition-colors">
                  sales@hermeshotels.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Hermes Resort & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
