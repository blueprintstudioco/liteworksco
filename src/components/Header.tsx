import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const services = [
  { name: 'Site Preparation', href: '/services/site-preparation' },
  { name: 'Excavation', href: '/services/excavation' },
  { name: 'Grading & Earthwork', href: '/services/grading' },
  { name: 'Land Clearing', href: '/services/land-clearing' },
  { name: 'Demolition', href: '/services/demolition' },
  { name: 'Drainage & Erosion Control', href: '/services/drainage' },
  { name: 'Utility Trenching', href: '/services/trenching' },
  { name: 'Driveway & Road Building', href: '/services/driveway' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img 
              src="/images/liteworks-logo.png" 
              alt="Liteworks Co." 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#c4d931] transition font-medium">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-[#c4d931] transition font-medium">
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a1a] rounded-lg shadow-xl py-2 border border-gray-700">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-[#c4d931] hover:bg-gray-800 transition"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-[#c4d931] transition font-medium">
              About
            </a>
            <a href="/faq" className="text-white hover:text-[#c4d931] transition font-medium">
              FAQ
            </a>
            <a href="/reviews" className="text-white hover:text-[#c4d931] transition font-medium">
              Reviews
            </a>
            <a href="/contact" className="text-white hover:text-[#c4d931] transition font-medium">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:5139279675" className="flex items-center text-white hover:text-[#c4d931] transition">
              <Phone className="h-4 w-4 mr-2" />
              (513) 927-9675
            </a>
            <a 
              href="/get-a-quote" 
              className="bg-[#c4d931] text-[#1a1a1a] px-5 py-2.5 rounded font-semibold hover:bg-[#b5ca2d] transition font-[Rajdhani]"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white hover:text-[#c4d931] transition font-medium py-2">
                Home
              </a>
              
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-[#c4d931] transition font-medium py-2"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#c4d931]">
                    {services.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block text-gray-300 hover:text-[#c4d931] transition py-1"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/about" className="text-white hover:text-[#c4d931] transition font-medium py-2">
                About
              </a>
              <a href="/faq" className="text-white hover:text-[#c4d931] transition font-medium py-2">
                FAQ
              </a>
              <a href="/reviews" className="text-white hover:text-[#c4d931] transition font-medium py-2">
                Reviews
              </a>
              <a href="/contact" className="text-white hover:text-[#c4d931] transition font-medium py-2">
                Contact
              </a>
              
              <div className="pt-4 space-y-3">
                <a href="tel:5139279675" className="flex items-center text-white hover:text-[#c4d931] transition">
                  <Phone className="h-4 w-4 mr-2" />
                  (513) 927-9675
                </a>
                <a 
                  href="/get-a-quote" 
                  className="block text-center bg-[#c4d931] text-[#1a1a1a] px-5 py-3 rounded font-semibold hover:bg-[#b5ca2d] transition font-[Rajdhani]"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
