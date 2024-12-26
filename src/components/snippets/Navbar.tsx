import { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const throttle = <T extends (...args: any[]) => void>(func: T, delay: number) => {
    let lastTime = 0;
  
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastTime >= delay) {
        lastTime = now;
        func(...args);
      }
    };
  };


  const handleScroll = useCallback(
    throttle(() => setIsScrolled(window.scrollY > 150), 100),
    []
  );

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const navItemClasses = useMemo(
    () => (isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'),
    [isScrolled]
  );

  const buttonClass = useMemo(
    () => (isScrolled ? 'text-gray-700' : 'text-white'),
    [isScrolled]
  );

  return (
    <nav className={`fixed w-full z-50 py-1 transition-all duration-300 will-change-transform ${isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className={isScrolled ? 'text-gray-800' : 'text-white'} size="md" isDark={isScrolled} />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className={`${navItemClasses} transition-colors duration-200 font-medium`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`rounded-md focus:outline-none ${buttonClass}`} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg border-t border-gray-200/20">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50/50 rounded-md transition-all duration-200" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
