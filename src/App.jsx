import { Outlet } from "react-router-dom";
import SidebarSec from "./components/shared/SidebarSec";

const App = () => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <div>
        <SidebarSec />
      </div>
      <div className="px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
