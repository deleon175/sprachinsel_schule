import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

/**
 * Gallery Page - Die Sprachinsel Schule
 * Geometric Modernism Design: Professional gallery showcasing school community and student success
 * - African-inspired colour palette
 * - Responsive grid layout
 * - High-quality processed images
 * - Logical narrative flow
 */

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Our Community",
    description: "Meet the vibrant team at Die Sprachinsel Schule. Together, we're committed to helping you master German and achieve your dreams.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/gallery-01-team-JTBMud2MLqUb5pG7X4oru7.webp",
    category: "Community"
  },
  {
    id: 2,
    title: "Community Engagement",
    description: "Our students actively participate in community events and outreach programs, spreading the joy of learning German.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/gallery-02-event-JTBMud2MLqUb5pG7X4oru7.webp",
    category: "Events"
  },
  {
    id: 3,
    title: "German Language Courses",
    description: "We offer comprehensive German language courses from A1 to B2 levels, both online and in-person. Classes starting June!",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/gallery-03-courses-JTBMud2MLqUb5pG7X4oru7.webp",
    category: "Courses"
  },
  {
    id: 4,
    title: "Success in Germany",
    description: "Our students experience incredible opportunities in Germany. Here they explore a beautiful German town and embrace new experiences.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/gallery-04-germany-park-JTBMud2MLqUb5pG7X4oru7.webp",
    category: "Abroad"
  },
  {
    id: 5,
    title: "Learning Journey",
    description: "Students immerse themselves in German literature and learning. This is what dedication to language mastery looks like.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/gallery-05-reading-JTBMud2MLqUb5pG7X4oru7.webp",
    category: "Learning"
  }
];

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
            Explore moments from our classrooms, student achievements, and the vibrant community at Die Sprachinsel Schule. From Zimbabwe to Germany, witness the transformative power of language learning.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift border-2 border-[#E8E3D8] stagger-item group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-gray-200 relative">
                  <img 
                    src={image.imageUrl} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-[#1A2B4A] mb-2 text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-gradient-to-r from-[#F4A460] to-[#FF6B35] rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Your Success Story Starts Here</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              These moments represent the dreams, dedication, and success of our students. From learning German in Zimbabwe to thriving in Germany, every image tells a story of transformation and opportunity.
            </p>
            <p className="text-sm opacity-90">
              Ready to become part of our community? Join hundreds of students who have transformed their futures through Die Sprachinsel Schule.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t-4 border-[#FF6B35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-600 mb-8">
            Start your German language journey today and unlock incredible opportunities in Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B35] hover:bg-[#C84B31] text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              Enroll Now
            </Button>
            <a href="tel:+263711778446" className="bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 inline-block">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
