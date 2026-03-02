import Link from "next/link";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accentColor?: "purple" | "green" | "gold" | "blue";
}

const accentMap = {
  purple: "border-cwa-purple group-hover:bg-cwa-purple",
  green: "border-cwa-green group-hover:bg-cwa-green",
  gold: "border-cwa-gold group-hover:bg-cwa-gold",
  blue: "border-cwa-blue group-hover:bg-cwa-blue",
};

const iconBgMap = {
  purple: "bg-cwa-purple/10 text-cwa-purple group-hover:bg-white group-hover:text-white",
  green: "bg-cwa-green/10 text-cwa-green group-hover:bg-white group-hover:text-white",
  gold: "bg-cwa-gold/10 text-cwa-gold group-hover:bg-white group-hover:text-cwa-dark",
  blue: "bg-cwa-blue/10 text-cwa-blue group-hover:bg-white group-hover:text-white",
};

export default function ProgramCard({
  icon,
  title,
  description,
  href,
  accentColor = "purple",
}: ProgramCardProps) {
  const content = (
    <div className={`group bg-white rounded-xl p-7 shadow-sm hover:shadow-xl border border-gray-100 border-t-4 ${accentMap[accentColor]} transition-all duration-300 h-full flex flex-col`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${iconBgMap[accentColor]}`}>
        {icon}
      </div>
      <h3 className="font-spartan font-bold text-cwa-dark text-xl mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 font-sans">{description}</p>
      {href && (
        <div className="mt-5 pt-4 border-t border-gray-100">
          <span className="text-cwa-purple font-semibold text-sm group-hover:underline">
            Learn more &rarr;
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}
