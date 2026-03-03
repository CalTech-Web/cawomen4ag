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
    "bg-cwa-gold hover:bg-cwa-gold/90 text-cwa-dark font-sans font-semibold",
  secondary:
    "bg-cwa-purple hover:bg-cwa-purple/90 text-white font-sans font-semibold",
  outline:
    "border border-cwa-gold text-cwa-gold hover:bg-cwa-gold/10 font-sans font-semibold",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm rounded-full",
  md: "px-7 py-3 text-[15px] rounded-full",
  lg: "px-9 py-4 text-base rounded-full",
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
  const classes = `inline-flex items-center justify-center transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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
