import { useLocation } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-[#f5f5f5] border border-gray-200 rounded-md px-6 py-4 flex items-center justify-between shadow-sm">

      {/* LEFT SIDE */}
      <h1 className="text-[44px] font-bold text-blue-700 tracking-tight">

        {location.pathname === "/" && "Dashboard"}
        {location.pathname === "/matchmaker" && "Pet Matchmaker"}
        {location.pathname === "/adoption" && "Adoption Hub"}
        {location.pathname === "/application" && "My Application"}
        {location.pathname === "/donation" && "Donation"}
        {location.pathname === "/kamustahan" && "Kamustahan"}

      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">

        <button className="text-[32px] text-blue-900 hover:scale-105 transition">
          <FaBell />
        </button>

        <button className="flex items-center gap-3 border border-blue-700 rounded-full px-6 py-2 bg-white shadow-sm hover:bg-blue-50 transition">
          <FaUserCircle className="text-[34px] text-gray-500" />
          <span className="text-[28px] text-blue-900 font-medium">
            Profile
          </span>
        </button>

      </div>
    </div>
  );
};

export default Header;