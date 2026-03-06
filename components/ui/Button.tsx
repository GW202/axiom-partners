import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    'bg-bronze-600 text-white hover:bg-bronze-700',
  secondary:
    'border border-navy-300 text-navy-800 hover:bg-navy-50',
  ghost:
    'text-navy-700 hover:text-navy-950 hover:bg-navy-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
