const categories = [
  { id: 1, title: "Stellar Biology", icon: "⭐" },
  { id: 2, title: "Exoplanets", icon: "🌍" },
  { id: 3, title: "Optics", icon: "👁️" },
  { id: 4, title: "Cosmology", icon: "🌌" },
];

const Categories = () => {
  return (
    <section className="mt-10 px-6">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Categories</h3>
        <span className="text-blue-400 text-sm cursor-pointer">
          View All
        </span>
      </div>

      {/* SCROLL */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#232a3a] text-white whitespace-nowrap hover:bg-[#2e3545] transition"
          >
            <span>{item.icon}</span>
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;