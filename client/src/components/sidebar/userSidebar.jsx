import {
  FaPaw,
  FaThLarge,
  FaDog,
  FaClipboardList,
  FaDonate,
  FaHandsHelping,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import PawponLogo from "../../assets/images/Pawpon.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 flex flex-col justify-between p-4 shadow-md">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="flex items-center gap-2 mb-8">
          <img
            src={PawponLogo}
            alt="Pawpon Logo"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-3xl font-bold text-blue-700">
            Pawpon
          </h1>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            <FaThLarge />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/matchmaker"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            <FaDog />
            <span>Pet Matchmaker</span>
          </NavLink>

          <NavLink
            to="/adoption"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            <FaPaw />
            <span>Adoption Hub</span>
          </NavLink>

          <NavLink
            to="/application"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            <FaClipboardList />
            <span>My Application</span>
          </NavLink>

          <NavLink
            to="/donation"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            <FaDonate />
            <span>Donation</span>
          </NavLink>

          <NavLink
            to="/kamustahan"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            <FaHandsHelping />
            <span>Kamustahan</span>
          </NavLink>

        </div>
      </div>

      {/* LOGOUT */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>

    </div>
  );
};

export default Sidebar;