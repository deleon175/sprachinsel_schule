import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Users, Briefcase, Globe, Award, ArrowRight, CheckCircle } from 'lucide-react';

/**
 * Home Page - Die Sprachinsel Schule
 * Geometric Modernism Design System:
 * - Bold geometric shapes and asymmetric layouts
 * - Vibrant African colour palette (terracotta, gold, forest green, midnight blue, coral)
 * - Typography: Poppins for headlines, Inter for body
 * - Smooth animations and hover effects
 * - Diagonal cuts and accent lines for visual interest
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/hero-main-JTBMud2MLqUb5pG7X4oru7.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="mb-6 inline-block">
              <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Welcome to Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master German,<br />
              <span className="text-[#F4A460]">Transform Your Future</span>
            </h1>
            
            <p className="text-xl text-[#F5F1E8] mb-8 max-w-xl leading-relaxed">
              Die Sprachinsel Schule is your premier gateway to German language proficiency and exciting opportunities in Germany. From A1 to B2 levels, we guide you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF6B35] hover:bg-[#C84B31] text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A2B4A] font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FF6B35] to-[#C84B31] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tuition */}
            <Card className="hover-lift bg-gradient-to-br from-[#F5F1E8] to-white border-2 border-[#E8E3D8] p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#C84B31] rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">Tuition A1-B2</h3>
              <p className="text-gray-600 text-sm">Comprehensive German language courses from beginner to upper-intermediate levels.</p>
            </Card>

            {/* CV & Letters */}
            <Card className="hover-lift bg-gradient-to-br from-[#F5F1E8] to-white border-2 border-[#E8E3D8] p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#2D5016] rounded-lg flex items-center justify-center mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">CV & Letters</h3>
              <p className="text-gray-600 text-sm">Expert assistance with CV writing and motivational letters for German opportunities.</p>
            </Card>

            {/* Interview Coaching */}
            <Card className="hover-lift bg-gradient-to-br from-[#F5F1E8] to-white border-2 border-[#E8E3D8] p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#F4A460] rounded-lg flex items-center justify-center mb-4">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">Interview Coaching</h3>
              <p className="text-gray-600 text-sm">Personalized interview preparation to help you succeed in German job applications.</p>
            </Card>

            {/* Apprenticeships */}
            <Card className="hover-lift bg-gradient-to-br from-[#F5F1E8] to-white border-2 border-[#E8E3D8] p-6 rounded-xl">
              <div className="w-14 h-14 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                <Briefcase size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">Apprenticeships</h3>
              <p className="text-gray-600 text-sm">Facilitate apprenticeship placements for our students in Germany.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A2B4A] to-[#2D5016] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4A460] opacity-10 rounded-full -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Opportunities for Relocation to Germany</h2>
            <p className="text-xl text-[#F5F1E8] max-w-2xl mx-auto">
              Germany offers a wealth of opportunities for individuals looking to build their future. Explore these pathways with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Study */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover-lift">
              <div className="flex items-start space-x-4 mb-4">
                <Globe size={32} className="text-[#F4A460] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Study</h3>
                  <p className="text-[#F5F1E8]">Tuition-free universities with courses in English. Work up to 20 hours/week as a student.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>Requirements:</strong> O level certificate (Grade 10 equivalent)</p>
              </div>
            </div>

            {/* Apprenticeship */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover-lift">
              <div className="flex items-start space-x-4 mb-4">
                <Briefcase size={32} className="text-[#FF6B35] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Apprenticeship</h3>
                  <p className="text-[#F5F1E8]">Work while studying. Earn €950-€1,500/month. B1 or B2 certification required.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>Requirements:</strong> A or O level certificate</p>
              </div>
            </div>

            {/* Voluntary Service */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover-lift">
              <div className="flex items-start space-x-4 mb-4">
                <Users size={32} className="text-[#2D5016] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Voluntary Service</h3>
                  <p className="text-[#F5F1E8]">1 year at hospitals, kindergartens, or care homes. Receive €400-€700 allowance.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>Requirements:</strong> A2 language level (A1 minimum)</p>
              </div>
            </div>

            {/* Au Pair */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover-lift">
              <div className="flex items-start space-x-4 mb-4">
                <Globe size={32} className="text-[#C84B31] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Au Pair</h3>
                  <p className="text-[#F5F1E8]">Cultural exchange in Germany, Austria, or Switzerland. €280-€300/month.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>Age limits:</strong> Germany 18-26 | Austria 18-27 | Switzerland 17-25</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div 
                className="w-full h-96 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663564944321/K7fHncyoU7oLwT8BP4GGma/hero-secondary-UpVW7rodwQfVP5s2FVTVGq.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF6B35] rounded-lg opacity-20"></div>
            </div>

            {/* Right side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">Why Choose Sprachinsel?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-[#FF6B35] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2B4A] mb-1">Expert Instruction</h3>
                    <p className="text-gray-600">Professional teachers with years of experience in German language education.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-[#2D5016] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2B4A] mb-1">Comprehensive Support</h3>
                    <p className="text-gray-600">From language training to CV writing, interview coaching, and apprenticeship placement.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-[#F4A460] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2B4A] mb-1">Proven Results</h3>
                    <p className="text-gray-600">Our students successfully secure apprenticeships, study placements, and opportunities in Germany.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-[#C84B31] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1A2B4A] mb-1">Flexible Learning</h3>
                    <p className="text-gray-600">Online and in-class courses available to fit your schedule and learning style.</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-[#FF6B35] hover:bg-[#C84B31] text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FF6B35] to-[#C84B31] mx-auto"></div>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-[#E8E3D8] p-6 rounded-xl hover-lift">
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-3">Why pursue an apprenticeship in Germany?</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>B1 or B2 language level required, depending on your field</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Germany ranks among Europe's richest countries with a robust economy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Excellent educational system and high-quality healthcare</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>One of the safest countries in the EU</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Financial support from families and mini job opportunities (up to €520/month)</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-[#E8E3D8] p-6 rounded-xl hover-lift">
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-3">What are the language proficiency levels?</h3>
              <p className="text-gray-700 text-sm">German language proficiency is structured into six levels: A1, A2, B1, B2, C1, and C2. We provide comprehensive training from A1 to B2, ensuring a clear pathway to fluency and qualification for various opportunities in Germany.</p>
            </Card>

            <Card className="border-2 border-[#E8E3D8] p-6 rounded-xl hover-lift">
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-3">Can I change my apprenticeship program?</h3>
              <p className="text-gray-700 text-sm">Yes! If you feel unsatisfied with your apprenticeship during the probation period, you have the flexibility to change to another program. This ensures you find the right fit for your career goals.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#C84B31] to-[#FF6B35] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully learned German and secured opportunities in Germany through Sprachinsel Schule.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#C84B31] hover:bg-[#F5F1E8] font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              Enroll Now
            </Button>
            <a href="tel:+263711778446" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#C84B31] font-bold px-8 py-6 text-lg rounded-lg transition-all duration-200 inline-block">
              Call Us: +263 71 177 8446
            </a>
          </div>

          <p className="mt-8 text-sm text-white/80">
            Email: Sprachinsel-schule@outlook.com | Phone: +49 17383 52438
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
