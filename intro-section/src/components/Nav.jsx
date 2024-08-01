import logo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import todolistIcon from "../assets/images/icon-todo.svg";
import calenderIcon from "../assets/images/icon-calendar.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import hamburger from "../assets/images/icon-menu.svg";
import remove from "../assets/images/icon-close-menu.svg";
import { useState } from "react";

function Nav() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDownComp, setIsDropDownComp] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleDropDown = () => {
    setIsDropDownOpen((toggleDropDown) => !toggleDropDown);
    setIsDropDownComp(false)
  };
  const handleCompDropDown = () => {
    setIsDropDownComp((toggleDropDown) => !toggleDropDown);
    setIsDropDownOpen(false)
  };
  const handleMenuBar = () => {
    setisMenuOpen((toogleMenu) => !toogleMenu);
  };

  return (
    <div>
      <nav className="desktop-nav  justify-between px-10 h-20 bg-almostWhite lg:flex hidden">
        <ul className="flex items-center gap-9">
          <li className="pr-5">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li onClick={handleDropDown} className="relative">
            <div className="flex items-center gap-2">
              <a href="#" className={isDropDownOpen && `text-black`}>
                Features
              </a>
              <img
                src={isDropDownOpen ? arrowDown : arrowUp}
                alt="arrow-icon"
              />
            </div>
            {isDropDownOpen && (
              <div className="dropdown-content bg-white shadow-even absolute right-0 w-40 top-10 rounded-xl">
                <ul className="nav-sublist">
                  <li>
                    <img src={todolistIcon} alt="sub-icon" />
                    <a href="#">Todo List</a>
                  </li>
                  <li>
                    <img src={calenderIcon} alt="sub-icon" />
                    <a href="#">Calendar</a>
                  </li>
                  <li>
                    <img src={reminderIcon} alt="sub-icon" />
                    <a href="#">Reminder</a>
                  </li>
                  <li>
                    <img src={planningIcon} alt="sub-icon" />
                    <a href="#">Planning</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li onClick={handleCompDropDown} className="relative">
            <div className="flex items-center gap-2">
              <a href="#" className={isDropDownComp && `text-black`}>
                Company
              </a>
              <img
                src={isDropDownComp ? arrowDown : arrowUp}
                alt="arrow-icon"
              />
            </div>
            {isDropDownComp && (
              <div className="dropdown-content bg-white shadow-even absolute left-0 w-28 top-10 rounded-xl">
                <ul className="nav-sublist">
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <ul className="flex items-center gap-9">
          <li>
            <a href="#">Login</a>
          </li>
          <li className="custom-btn">
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav px-10 h-20 bg-almostWhite lg:hidden flex ">
        <div className="nav-title w-full flex items-center justify-between">
          <li>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <button onClick={handleMenuBar}>
            <img src={hamburger} alt="menu" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="sidebar bg-black bg-opacity-65 fixed left-0 right-0  h-full w-full ">
            <div className="bg-white w-3/5 h-full px-10  absolute top-0 right-0">
              <div className="h-20 w-full flex justify-end items-center">
                <button onClick={handleMenuBar}>
                  <img src={remove} alt="remove" />
                </button>
              </div>

              <div className="nav-content">
                <ul className="flex flex-col  gap-9">

                  <li onClick={handleDropDown} className="relative">
                    <div className="flex items-center gap-2">
                      <a href="#" className={isDropDownOpen && `text-black`}>
                        Features
                      </a>
                      <img
                        src={isDropDownOpen ? arrowUp : arrowDown}
                        alt="arrow-icon"
                      />
                    </div>
                    {isDropDownOpen && (
                      <div className="dropdown-content bg-white  right-0   top-10 rounded-xl">
                        <ul className="nav-sublist">
                          <li>
                            <img src={todolistIcon} alt="sub-icon" />
                            <a href="#">Todo List</a>
                          </li>
                          <li>
                            <img src={calenderIcon} alt="sub-icon" />
                            <a href="#">Calendar</a>
                          </li>
                          <li>
                            <img src={reminderIcon} alt="sub-icon" />
                            <a href="#">Reminder</a>
                          </li>
                          <li>
                            <img src={planningIcon} alt="sub-icon" />
                            <a href="#">Planning</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li onClick={handleCompDropDown} className="relative">
                    <div className="flex items-center gap-2">
                      <a href="#" className={isDropDownComp && `text-black`}>
                        Company
                      </a>
                      <img
                        src={isDropDownComp ? arrowUp : arrowDown}
                        alt="arrow-icon"
                      />
                    </div>
                    {isDropDownComp && (
                      <div className="dropdown-content bg-white  left-0 w-full  rounded-xl">
                        <ul className="nav-sublist">
                          <li>
                            <a href="#">History</a>
                          </li>
                          <li>
                            <a href="#">Our Team</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
                <ul className="flex flex-col items-center gap-6 pt-5">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li className="custom-btn w-full text-center">
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}


      </nav>
      
    </div>
  );
}
export default Nav;
