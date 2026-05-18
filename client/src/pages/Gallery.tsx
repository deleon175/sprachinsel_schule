import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, ImagePlus } from 'lucide-react';

/**
 * Gallery Page - Die Sprachinsel Schule
 * Geometric Modernism Design: Placeholder for gallery content
 * - Ready to receive gallery images
 * - African-inspired colour palette
 * - Professional layout with grid structure
 */

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#1A2B4A] to-[#2D5016] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <a className="flex items-center space-x-2 text-[#F4A460] hover:text-[#FF6B35] transition-colors mb-6 w-fit">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </a>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-[#F5F1E8] max-w-2xl">
            Explore moments from our classrooms, student achievements, and the vibrant community at Die Sprachinsel Schule.
          </p>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift border-2 border-[#E8E3D8]"
              >
                <div className="aspect-square bg-gradient-to-br from-[#E8E3D8] to-[#D8D0C8] flex items-center justify-center">
                  <div className="text-center">
                    <ImagePlus size={48} className="text-[#C84B31] mx-auto mb-2 opacity-50" />
                    <p className="text-[#666666] text-sm">Gallery Image {item}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1A2B4A] mb-2">Moment {item}</h3>
                  <p className="text-sm text-gray-600">Gallery content coming soon</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-gradient-to-r from-[#F4A460] to-[#FF6B35] rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Gallery Coming Soon</h2>
            <p className="text-lg mb-6">
              We're preparing an exciting collection of photos showcasing our classroom experiences, student success stories, and the vibrant learning environment at Sprachinsel Schule.
            </p>
            <p className="text-sm opacity-90">
              Check back soon to see our students in action!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t-4 border-[#FF6B35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">Interested in Joining Our Community?</h2>
          <p className="text-gray-600 mb-8">
            Become part of the Sprachinsel Schule family and start your German language journey today.
          </p>
          <Button className="bg-[#FF6B35] hover:bg-[#C84B31] text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
            Enroll Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
