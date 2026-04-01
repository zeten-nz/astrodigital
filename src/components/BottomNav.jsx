import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const base = "flex flex-col items-center text-xs";
  const active = "text-blue-500";
  const inactive = "text-gray-400";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0B1120] border-t border-gray-700 flex justify-around py-3">
      <NavLink  to="/" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        🏠 Home
      </NavLink>

      <NavLink  to="/lab" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        🧪 Lab
      </NavLink>

      <NavLink  to="/courses" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        📚 Courses
      </NavLink>

      <NavLink  to="/quizzes" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        ❓ Quizzes
      </NavLink>

      <NavLink  to="/profile" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        👤 Profile
      </NavLink>
    </div>
  );
};

export default BottomNav;