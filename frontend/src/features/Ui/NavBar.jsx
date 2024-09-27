import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; 
import { useSelector } from "react-redux"; 
import './NavBar.css'

function NavBar() {
  const darkMode = useSelector((state) => state.darkMode.darkMode); 

  return (
    <div className={`navbar ${darkMode ? "bg-gray-900 text-white dark-nav-shadow" : "bg-base-100 text-black light-nav-shadow"} shadow-md`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${darkMode ? "bg-gray-800 text-white" : "bg-base-100 text-black"} rounded-box z-[1] mt-3 w-52 p-2 shadow`}
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="w-40">
          <Link to="/" className="btn btn-ghost text-xl w-full h-full">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex-none gap-8">
        <div className="form-control">
          <input
            type="search"
            placeholder="Search"
            className={`input input-bordered w-24 md:w-auto ${darkMode ? "bg-gray-800 text-white" : "bg-base-100 text-black"}`} 
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${darkMode ? "bg-gray-800 text-white" : "bg-base-100 text-black"} rounded-box z-[1] mt-3 w-52 p-2 shadow`}
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default NavBar;
