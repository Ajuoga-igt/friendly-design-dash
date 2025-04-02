
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const baseStyles = cn(
    'rounded-md font-medium inline-flex items-center justify-center transition-all',
    {
      'bg-primary hover:bg-primary/90 text-white': variant === 'primary',
      'bg-secondary hover:bg-secondary/90 text-white': variant === 'secondary',
      'bg-transparent border border-primary text-primary hover:bg-primary/10': variant === 'outline',
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-6 py-3': size === 'lg',
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
