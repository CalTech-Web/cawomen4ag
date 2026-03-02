interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "purple" | "dark" | "green";
  py?: "sm" | "md" | "lg";
}

const bgClasses = {
  white: "bg-white",
  light: "bg-gray-50",
  purple: "bg-cwa-purple text-white",
  dark: "bg-cwa-dark text-white",
  green: "bg-cwa-green text-white",
};

const pyClasses = {
  sm: "py-10",
  md: "py-16",
  lg: "py-24",
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
