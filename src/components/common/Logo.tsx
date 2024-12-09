import React from 'react';
import logoImage from '../../assets/Tab_Logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', isDark = false }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage}
        alt="Synergeek Logo" 
        className={`${sizes[size]} aspect-auto object-contain ${isDark ? 'brightness-100' : 'brightness-100'}`}
      />
      <span className={`font-bold ml-3 ${
        size === 'sm' ? 'text-xl' : 
        size === 'md' ? 'text-2xl' : 
        'text-3xl'
      }`}>
        Synergeek
      </span>
    </div>
  );
};

export default Logo;