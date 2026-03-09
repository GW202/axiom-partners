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
    'bg-gradient-to-r from-bronze-600 to-bronze-500 text-white shadow-lg shadow-bronze-600/20 hover:from-bronze-700 hover:to-bronze-600 hover:shadow-bronze-600/30',
  secondary:
    'border border-navy-200 text-navy-800 hover:bg-navy-50 hover:border-navy-300 shadow-sm',
  ghost:
    'text-navy-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-wide',
  md: 'px-6 py-3 text-sm tracking-wide',
  lg: 'px-8 py-4 text-sm tracking-wide',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}
