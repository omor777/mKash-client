import { Outlet } from "react-router-dom";
import SidebarSec from "./components/shared/SidebarSec";

const App = () => {
  return (
    <div>
      <div>
        <SidebarSec />
      </div>
      <div className="md:ml-72 px-8 md:px-12 lg:px20">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
