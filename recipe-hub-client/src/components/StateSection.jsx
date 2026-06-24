import React from "react";
import { Users, UtensilsCrossed, Award, Heart } from "lucide-react";

const StateSection = () => {
  const stats = [
    {
      id: 1,
      label: "Premium Recipes",
      value: "12,000+",
      icon: UtensilsCrossed,
    },
    { id: 2, label: "Expert Chefs", value: "350+", icon: Award },
    { id: 3, label: "Active Foodies", value: "45k+", icon: Users },
    { id: 4, label: "Happy Hearts", value: "150k+", icon: Heart },
  ];

  return (
    <section className="relative border-none outline-none ring-0 bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:via-[#0e141f] dark:to-[#0c1017] py-16 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      {/* 🌌 ব্যাকগ্রাউন্ড সফট গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.02] dark:bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white dark:bg-[#111c2a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800/80 shadow-sm flex flex-col items-center text-center space-y-3 group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#162235] text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-gray-50">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StateSection;
