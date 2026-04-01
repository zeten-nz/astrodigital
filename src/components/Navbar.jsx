const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#0B1120]">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="text-xl">☰</div>
        <h1 className="font-semibold tracking-wide">ASTRODIGITAL.UZ</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <span>🔍</span>
        <div className="w-8 h-8 rounded-full bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Navbar;