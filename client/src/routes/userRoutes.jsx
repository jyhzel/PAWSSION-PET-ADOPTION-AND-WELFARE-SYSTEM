import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/user/UserDashboard";
import PetMatchmaker from "../pages/user/PetMatchmaker";
import AdoptionHub from "../pages/user/AdoptionHub";
import MyApplication from "../pages/user/MyApplication";
import Donation from "../pages/user/Donation";
import Kamustahan from "../pages/user/Kamustahan";

const userRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/matchmaker" element={<PetMatchmaker />} />
      <Route path="/adoption" element={<AdoptionHub />} />
      <Route path="/application" element={<MyApplication />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/kamustahan" element={<Kamustahan />} />
    </Routes>
  );
};

export default userRoutes;