import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollHandlerRef = useRef<() => void>();

  // Optimized throttle function
  const throttle = useCallback((fn: () => void, limit: number) => {
    let lastCall = 0;
    return () => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn();
      }
    };
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 150);
  }, []);

  // Memoize the throttled scroll handler
  const throttledScrollHandler = useMemo(
    () => throttle(handleScroll, 100),
    [handleScroll, throttle]
  );

  useEffect(() => {
    scrollHandlerRef.current = throttledScrollHandler;
    window.addEventListener('scroll', scrollHandlerRef.current);

    return () => {
      window.removeEventListener('scroll', scrollHandlerRef.current!);
    };
  }, [throttledScrollHandler]);

  const renderNavItems = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={`${
            isScrolled
              ? 'text-gray-700 hover:text-indigo-600'
              : 'text-white/90 hover:text-white'
          } transition-colors duration-200 font-medium`}
        >
          {item.label}
        </a>
      )),
    [isScrolled]
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 will-change-transform ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo
              className={isScrolled ? 'text-gray-800' : 'text-white'}
              size="md"
              isDark={isScrolled}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {renderNavItems}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={`rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg border-t border-gray-200/20">
            {renderNavItems}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
