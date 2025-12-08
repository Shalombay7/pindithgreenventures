import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  // Add more links here as you add sections, e.g., { name: 'About', href: '#about' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when user scrolls more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-2" href="/">
          <img className="h-8 w-auto" src="/logo.svg" alt="PinDith Green Ventures Logo" />
          <span className={`font-bold transition-colors ${isScrolled ? 'text-earth-800' : 'text-white'}`}>PinDith Green Ventures</span>
        </a>

        <nav className="hidden md:flex md:gap-8">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a className={`transition-colors font-medium ${isScrolled ? 'text-gray-600 hover:text-pindith-700' : 'text-white/80 hover:text-white'}`} href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}