import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";


const MainLayout = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen text-white">
      <Navbar />

      <main className="pb-20">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
};

export default MainLayout;