import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import NavLinks from "./NavLinks";
const BigSidebar = () => {
  const { showSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container" : "sidebar-container  show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSideBar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
