import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/userSidebar";
import Header from "./components/header/userheader";

import Dashboard from "./pages/user/UserDashboard";
import PetMatchmaker from "./pages/user/PetMatchmaker";
import AdoptionHub from "./pages/user/AdoptionHub";
import MyApplication from "./pages/user/MyApplication";
import Donation from "./pages/user/Donation";
import Kamustahan from "./pages/user/Kamustahan";

function App() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="p-2">
          <Header />
        </div>

        {/* PAGE CONTENT */}
        <div className="px-5 pb-5 overflow-y-auto flex-1">

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/matchmaker" element={<PetMatchmaker />} />
            <Route path="/adoption" element={<AdoptionHub />} />
            <Route path="/application" element={<MyApplication />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/kamustahan" element={<Kamustahan />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;