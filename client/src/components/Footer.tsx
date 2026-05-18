import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Geometric Modernism Design: Dark footer with accent colours and contact information
 * - Midnight blue background with cream text
 * - Gold accents for visual interest
 * - Contact information organized in columns
 */
export default function Footer() {
  return (
    <footer className="bg-[#1A2B4A] text-[#F5F1E8] py-12 border-t-4 border-[#FF6B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[#F4A460] mb-4">Die Sprachinsel Schule</h3>
            <p className="text-sm leading-relaxed">
              Your gateway to German language proficiency and opportunities in Germany. Located in Makoni Shopping Centre, Chitungwiza, Zimbabwe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#F4A460] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#FF6B35] transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-[#FF6B35] transition-colors">Gallery</a></li>
              <li><a href="#courses" className="hover:text-[#FF6B35] transition-colors">Courses</a></li>
              <li><a href="#opportunities" className="hover:text-[#FF6B35] transition-colors">Opportunities</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#F4A460] mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                <div>
                  <p>+49 17383 52438</p>
                  <p>+263 71 177 8446</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                <p>Sprachinsel-schule@outlook.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                <p>Makoni Shopping Centre<br />Chitungwiza, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2D5016] my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 Die Sprachinsel Schule. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-[#F4A460] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#F4A460] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
