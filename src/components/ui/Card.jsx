// components/ui/Card.jsx
import React from 'react';
import { cn } from '../../utils/helpers';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  ...props
}) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverEffect = hover
    ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md',
        paddingSizes[padding],
        hoverEffect,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;