// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <div className="flex items-center">
              <div className="transform rotate-45 w-6 h-6 bg-white mr-2"></div>
              <span className="text-xl font-medium">CourseSite</span>
            </div>
          </Link>
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Boost your Learning & Knowledge with<br />
          CourseSite Now
        </h2>
        
        {/* CTA Button */}
        <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full mb-10">
          Start Learning Now
        </button>
        
        {/* Path Text with Avatar */}
        <div className="flex items-center mb-12">
          <p className="mr-2">Your Path to Becoming a Web Wizard</p>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image 
              src="/avatar-placeholder.jpg" 
              alt="Avatar" 
              width={32} 
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-4">
          <Link href="/benefits" className="hover:underline">Benefits</Link>
          <Link href="/courses" className="hover:underline">Courses</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/reviews" className="hover:underline">Reviews</Link>
          <Link href="/newsletter" className="hover:underline">Join Our news Letter</Link>
          <Link href="/notify" className="border border-black rounded-full px-6 py-2 hover:bg-gray-100">
            Notify Me
          </Link>
        </nav>
      </div>
      
      {/* Bottom Bar with Copyright and Framer Credits */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-600">CourseSite © 2025. Designed by FrameBase</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;