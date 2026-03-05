import Link from "next/link";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ProgramCard({
  icon,
  title,
  description,
  href,
}: ProgramCardProps) {
  const content = (
    <div className="group bg-white rounded-2xl p-8 h-full flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-cwa-gold/20 flex items-center justify-center mb-6 text-cwa-purple group-hover:bg-cwa-gold/30 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-cwa-dark text-[1.35rem] mb-3 leading-snug">{title}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed flex-1">{description}</p>
      {href && (
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2 text-cwa-purple">
          <span className="font-sans font-semibold text-sm group-hover:underline">Learn more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
