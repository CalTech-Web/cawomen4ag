import Link from "next/link";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accent?: "purple" | "green" | "gold" | "blue";
  featured?: boolean;
}

const accentStyles = {
  purple: {
    border: "border-t-cwa-purple",
    iconBg: "bg-cwa-purple/10",
    iconText: "text-cwa-purple",
    hoverBg: "group-hover:bg-cwa-purple/[0.03]",
    tag: "bg-cwa-purple/10 text-cwa-purple",
  },
  green: {
    border: "border-t-cwa-green",
    iconBg: "bg-cwa-green/10",
    iconText: "text-cwa-green",
    hoverBg: "group-hover:bg-cwa-green/[0.03]",
    tag: "bg-cwa-green/10 text-cwa-green",
  },
  gold: {
    border: "border-t-cwa-gold",
    iconBg: "bg-cwa-gold/15",
    iconText: "text-amber-700",
    hoverBg: "group-hover:bg-cwa-gold/[0.03]",
    tag: "bg-cwa-gold/15 text-amber-700",
  },
  blue: {
    border: "border-t-cwa-blue",
    iconBg: "bg-cwa-blue/10",
    iconText: "text-cwa-blue",
    hoverBg: "group-hover:bg-cwa-blue/[0.03]",
    tag: "bg-cwa-blue/10 text-sky-700",
  },
};

export default function ProgramCard({
  icon,
  title,
  description,
  href,
  accent = "purple",
  featured = false,
}: ProgramCardProps) {
  const styles = accentStyles[accent];

  const content = (
    <div
      className={`group relative rounded-2xl border-t-4 ${styles.border} bg-white ${styles.hoverBg} shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden ${featured ? "p-10" : "p-7"}`}
    >
      {/* Decorative corner gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${styles.iconBg} rounded-bl-[80px] opacity-50 -translate-y-4 translate-x-4 group-hover:opacity-80 transition-opacity duration-500`} />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5 ${styles.iconText} group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="w-7 h-7">{icon}</div>
        </div>

        <h3
          className={`font-heading font-semibold text-cwa-dark leading-snug mb-3 ${featured ? "text-2xl" : "text-xl"}`}
        >
          {title}
        </h3>

        <p
          className={`text-gray-500 leading-relaxed flex-1 ${featured ? "text-base" : "text-[15px]"}`}
        >
          {description}
        </p>

        {href && (
          <div className="mt-6 flex items-center gap-2">
            <span
              className={`font-sans font-semibold text-sm ${styles.iconText} group-hover:underline`}
            >
              Learn more
            </span>
            <svg
              className={`w-4 h-4 ${styles.iconText} group-hover:translate-x-1.5 transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}
