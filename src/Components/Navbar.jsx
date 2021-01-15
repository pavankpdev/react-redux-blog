import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, NavbarBrand, Button } from "reactstrap";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="xs">
        <Link to="/">
          <NavbarBrand>UserList</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Link to="/add" className="text-white ml-auto">
          <Button color="primary">
            <i className="fas fa-plus" /> Add user
          </Button>
        </Link>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
