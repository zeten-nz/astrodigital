const progressData = [
  {
    title: "Intro to Orbitals",
    percentage: 75,
    icon: "rocket_launch",
    color: "bg-blue-500",
  },
  {
    title: "Solar Physics",
    percentage: 20,
    icon: "wb_sunny",
    color: "bg-yellow-400",
  },
  // keyingi kurslar qo'shilsa shunga o'xshash object
];

const YourProgress = () => {
  return (
    <section className="mt-12 px-6 md:px-0 max-w-5xl mx-auto">
      <h3 className="text-xl font-semibold text-white mb-6">Your Progress</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {progressData.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#141b2b] rounded-xl p-5 flex items-center gap-5 border border-white/10"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}/10 text-white text-xl`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white font-semibold">{item.title}</span>
                <span className="text-gray-400 text-xs">{item.percentage}%</span>
              </div>

              <div className="h-1.5 w-full bg-[#0c1322] rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YourProgress;