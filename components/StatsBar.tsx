import CountUp from "./CountUp";

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading font-bold text-cwa-purple text-4xl sm:text-5xl leading-none mb-2">
                <CountUp value={stat.value} />
              </p>
              <p className="font-sans text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
