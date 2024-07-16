import { Button } from "flowbite-react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Button>Hello</Button>
      <Outlet />
    </div>
  );
};

export default App;
