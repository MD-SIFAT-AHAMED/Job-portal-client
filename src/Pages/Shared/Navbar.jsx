import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Loading from "./Loading";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, userSignOut } = use(AuthContext);
  console.log(loading)
 if (loading)
 {
  return <div>User Loading</div>
 }
  const handlerSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("SignOut Succesfully");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const links = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>All Jobs</li>
      </NavLink>
      <NavLink to={'/addJob'}>
        <li>Add Job</li>
      </NavLink>
      <NavLink to={'/myApplications'}>
        <li>My Applications</li>
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
          {user ? (
            <div
              onClick={handlerSignOut}
              className="border px-3 py-1 rounded-full font-semibold cursor-pointer"
            >
              Sign Out
            </div>
          ) : (
            <div className="space-x-2 font-semibold">
              <Link to={"/register"} className="border px-3 py-1 rounded-full">
                Register
              </Link>
              <Link to={"/signIn"} className="border px-3 py-1 rounded-full">
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
