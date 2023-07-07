import { React, useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNavbar = () => {
        setActive('navBar activeNavbar')
    }
    const removeNavbar = () => {
        setActive('navBar')
    }
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/abc" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="abc" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="abc" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="abc" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="abc" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="abc" className="navLink">
                Page
              </a>
            </li>
            <li className="navItem">
              <a href="abc" className="navLink">
                New
              </a>
            </li>
            <li className="navItem">
              <a href="abc" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="abc">Book Now</a>
            </button>
          </ul>

          <div className="closeNavbar" onClick={removeNavbar}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNavbar}>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};
export default Navbar;
