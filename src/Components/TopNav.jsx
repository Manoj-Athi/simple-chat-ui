import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { HiOutlineUser } from "react-icons/hi";

const TopNav = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="justify-content-end align-items-end border-bottom bg-white"
    >
      <Nav variant="pills" activeKey="1" className="px-2 text-white">
        <NavDropdown
          title={<HiOutlineUser size={20} />}
          id="dropdown-menu-align-end"
          align="end"
          menuVariant="dark"
        >
          <NavDropdown.Item eventKey="4.1">Edit Profile</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
