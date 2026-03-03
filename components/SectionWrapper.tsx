interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "purple" | "dark" | "green";
  py?: "sm" | "md" | "lg";
}

const bgClasses = {
  white: "bg-white",
  light: "bg-cwa-cream",
  purple: "bg-cwa-purple text-white",
  dark: "bg-cwa-dark text-white",
  green: "bg-cwa-green text-white",
};

const pyClasses = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28 lg:py-32",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
  py = "lg",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgClasses[bg]} ${pyClasses[py]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
