import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`${className} will-change-transform`}  // Using will-change for optimized animation
    >
      {children}
    </motion.div>
  );
};

export default memo(AnimatedSection);  // Using memo to avoid unnecessary re-renders
