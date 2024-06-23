import React from "react";
import Logo from "./logo";
import ThemeToggle from "./ThemeToggle";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logoutcontainer from "./Logoutcontainer";
const Navbar = () => {
  const { toggleSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <Logoutcontainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
