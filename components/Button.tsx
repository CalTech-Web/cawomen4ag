import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variantClasses = {
  primary:
    "bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-spartan font-bold shadow-md hover:shadow-lg",
  secondary:
    "bg-cwa-purple hover:bg-purple-900 text-white font-spartan font-bold shadow-md hover:shadow-lg",
  outline:
    "border-2 border-cwa-gold text-cwa-gold hover:bg-cwa-gold hover:text-cwa-dark font-spartan font-bold",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md transition-all duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
