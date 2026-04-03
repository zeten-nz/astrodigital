import { useState } from "react";
import { Link } from "react-router-dom";

const AuthButton = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    profilePic: "https://i.pravatar.cc/150?img=32",
  }); 


  return (
    <div className="flex items-center gap-3">
      {user ? (
        <div className="relative group">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
          />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {user.name}
          </span>
        </div>
      ) : (
        <Link
          to="/register"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-md"
        >
          Try Now
        </Link>
      )}
    </div>
  );
};

export default AuthButton;