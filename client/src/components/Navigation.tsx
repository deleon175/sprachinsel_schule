import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Navigation Component
 * Geometric Modernism Design: Bold, minimal navigation with African accent colours
 * - Midnight blue background with cream text
 * - Coral accent for active/hover states
 * - Responsive mobile menu
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A2B4A] text-[#F5F1E8] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#C84B31] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#F4A460]">Sprachinsel</h1>
                <p className="text-xs text-[#F5F1E8]">German School</p>
              </div>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="hover:text-[#F4A460] transition-colors font-medium">Home</a>
            </Link>
            <Link href="/gallery">
              <a className="hover:text-[#F4A460] transition-colors font-medium">Gallery</a>
            </Link>
            <a href="#contact" className="hover:text-[#F4A460] transition-colors font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#FF6B35] hover:bg-[#C84B31] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#2D5016] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-[#2D5016]">
            <Link href="/">
              <a className="block px-4 py-2 rounded-lg hover:bg-[#2D5016] transition-colors">Home</a>
            </Link>
            <Link href="/gallery">
              <a className="block px-4 py-2 rounded-lg hover:bg-[#2D5016] transition-colors">Gallery</a>
            </Link>
            <a href="#contact" className="block px-4 py-2 rounded-lg hover:bg-[#2D5016] transition-colors">Contact</a>
            <Button className="w-full bg-[#FF6B35] hover:bg-[#C84B31] text-white font-semibold mt-4">
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
