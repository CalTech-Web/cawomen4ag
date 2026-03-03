import Link from "next/link";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accentColor?: "purple" | "green" | "gold" | "blue";
}

export default function ProgramCard({
  icon,
  title,
  description,
  href,
}: ProgramCardProps) {
  const content = (
    <div className="group bg-white rounded-xl p-8 border border-gray-100/80 hover:border-cwa-purple/30 transition-all duration-300 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-cwa-cream flex items-center justify-center mb-6 text-cwa-purple">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-cwa-dark text-xl mb-3 leading-snug">{title}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed flex-1">{description}</p>
      {href && (
        <div className="mt-6 flex items-center gap-2 text-cwa-purple">
          <span className="font-sans font-semibold text-sm group-hover:underline">Learn more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}
