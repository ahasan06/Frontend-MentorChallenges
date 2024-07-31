import logo from "../../public/assets/images/logo.svg";
import crossIcon from "../../public/assets/images/icon-close.svg";
import hamburgerIcon from "../../public/assets/images/icon-hamburger.svg";
import { useState } from "react";

function Nav() {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(navToggle=>!navToggle);
  };

  return (
    <div className="nav-controller">
      <nav className="flex items-center gap-5 absolute z-50 w-full mobile-navigation md:hidden">
        <div className="logo w-full h-16 flex px-5 ">
          <button onClick={navHandler}>
            <img src={hamburgerIcon} alt="" />
          </button>
          <div className="logo h-full flex justify-center items-center">
            <img
              src={logo}
              alt=" "
              className="absolute right-1/2 translate-x-1/2"
            />
          </div>
        </div>
        {nav && (
          <div className="absolute bg-white w-full h-16 top-0 flex px-5 gap-16  ">
            <button
            onClick={navHandler}
            >
              <img src={crossIcon} alt="" />
            </button>
            <ul className="nav-list text-black font-semibold h-full flex justify-center items-center gap-3 ">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">shop</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <nav className="md:flex items-center gap-16 absolute z-50 w-full px-20 py-8 desktop-navigation hidden">
            <img
              src={logo}
              alt=" "
            />
            <ul className="nav-list text-white  h-full flex justify-center items-center gap-6 text-xl">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">shop</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
      </nav>
    </div>
  );
}

export default Nav;
