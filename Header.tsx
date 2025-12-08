import { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  // Add more links here as you add sections, e.g., { name: 'About', href: '#about' }
];

type HeaderProps = {
  onCartClick: () => void;
};

export function Header({ onCartClick }: HeaderProps) {
  const { itemCount } = useCart();
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

        <div className="flex items-center gap-4">
          <button onClick={onCartClick} className="relative p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-pindith-500 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button (optional) */}
          <button className="block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}