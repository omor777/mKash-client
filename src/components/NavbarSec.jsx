import { Button, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/toggle/toggleSlice";

const NavbarSec = () => {
  const { isOpen } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  return (
    <Navbar fluid rounded className="shadow-md px-8">
      <Navbar.Brand>
        <span className=" text-center whitespace-nowrap text-xl font-semibold dark:text-white">
          mKash
        </span>
      </Navbar.Brand>
      <Button onClick={() => dispatch(toggleSidebar())} className="md:hidden">
        Toggle
      </Button>
      {/* <Navbar.Collapse></Navbar.Collapse> */}
    </Navbar>
  );
};

export default NavbarSec;
