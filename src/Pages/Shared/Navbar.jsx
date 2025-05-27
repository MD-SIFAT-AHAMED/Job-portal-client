import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>All Jobs</li>
      </NavLink>
      <NavLink>
        <li>Add Job</li>
      </NavLink>
      <NavLink>
        <li>My Job Posts</li>
      </NavLink>
    </>
  );

  return (
    <div className="shadow-sm bg-gray-200/10">
      <div className="navbar max-w-screen-2xl w-11/12 mx-auto pop ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-sm btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 space-y-1 w-40 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-lg font-semibold">Job Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 text-base  menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="space-x-2 font-semibold">
            <Link to={'/register'} className="border px-3 py-1 rounded-full">Register</Link>
            <Link to={'/signIn'} className="border px-3 py-1 rounded-full">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
