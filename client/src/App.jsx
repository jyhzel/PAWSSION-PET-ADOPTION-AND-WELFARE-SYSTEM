
import Sidebar from "./components/sidebar/userSidebar";
import Header from "./components/header/userheader";
import UserRoutes from "./routes/userRoutes";

function App() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-2">
          <Header />
        </div>
        <div className="px-5 pb-5 overflow-y-auto flex-1">
          <UserRoutes />
        </div>

      </div>
    </div>
  );
}
export default App;