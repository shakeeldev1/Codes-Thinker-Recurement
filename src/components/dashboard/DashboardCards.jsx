import React from "react";

const cards = [
  {
    title: "Total Applications",
    value: 3073,
    change: "+10%",
    color: "text-emerald-300", // bright green for visibility
  },
  {
    title: "Total Jobs & Internship Applications",
    value: 1890,
    change: "-05%",
    color: "text-red-300", // lighter red
  },
  {
    title: "Pending Reviews",
    value: 420,
    change: "+08%",
    color: "text-yellow-300", // brighter yellow
  },
  {
    title: "Accepted / Shortlisted",
    value: 763,
    change: "+05%",
    color: "text-blue-300", // lighter blue
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="h-40 flex flex-col justify-between 
            bg-gradient-to-br from-[#0e0664] via-[#1d0b80] to-[#f59c22]
            p-6 rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 transform hover:-translate-y-1 border border-[#f59c22]/30"
        >
          <div>
            <h3 className="text-white/80 text-sm font-medium mb-2 tracking-wide">
              {card.title}
            </h3>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              {card.value}
            </p>
          </div>
          <div>
            <p className={`text-sm font-semibold ${card.color}`}>
              {card.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
