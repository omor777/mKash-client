import { Sidebar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { HiTable, HiArrowSmRight } from "react-icons/hi";
const SidebarSec = () => {
  return (
    <Sidebar className="h-screen         w-72">
      <Sidebar.Items className="">
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="#">Dashboard</Sidebar.Item>
          <Sidebar.Collapse label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#">Inbox</Sidebar.Item>
          <Sidebar.Item href="#">Users</Sidebar.Item>
          <Sidebar.Item href="#">Products</Sidebar.Item> */}
          <Sidebar.Item as="p" icon={HiArrowSmRight}>
            <NavLink to={"/"}>Sing In</NavLink>
          </Sidebar.Item>
          <Sidebar.Item as="p" icon={HiTable}>
            <NavLink to={"/signUP"}>Sign Up</NavLink>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarSec;
