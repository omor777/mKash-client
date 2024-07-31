import { Outlet } from "react-router-dom";
import SidebarSec from "./components/shared/SidebarSec";
import NavbarSec from "./components/NavbarSec";

const App = () => {
  return (
    <div>
      <div>
        <NavbarSec />
        <SidebarSec />
      </div>
      <div className="lg:ml-72 px-8 md:px-12 lg:px20">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
