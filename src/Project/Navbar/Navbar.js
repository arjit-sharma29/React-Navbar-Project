import React, { useState } from "react";

import "./Navbar.css";

import { MenuItem } from "./MenuItem";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AcUnitIcon from "@material-ui/icons/AcUnit";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="NavbarItem">
        <div className="navbar-logo">
          <h1>React</h1>
          <AcUnitIcon fontSize="large" style={{ marginLeft: 8 }} />
        </div>
        <div className="navbar-icon" onClick={() => setClick(!click)}>
          {click ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
