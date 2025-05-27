import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";

const Register = () => {
  const [showPassword,setShowPassword] = useState(false);
  return (
    <div className="bg-base-200">
      <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center py-10">
        <div>
          <form className="fieldset border-base-300 rounded-box w-xs border md:text-base p-4 *:focus:outline-none *:border-none">
            <h3 className="text-2xl md:text-4xl text-center">Register</h3>
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              className="input rounded-lg "
              placeholder="Enter your name"
            />

            <label>Photo Url</label>
            <input
              type="text"
              name="PhotoUrl"
              required
              className="input rounded-lg"
              placeholder="Your photo link"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              className="input  rounded-lg"
              placeholder="example@gmail.com"
            />

              <label>Password</label>
              <div className="relative">
              <input
                type={showPassword ? "text" : "password" }
                name="password"
                required
                className="input rounded-lg border-none focus:outline-none"
                placeholder="**********"
              />
              <div onClick={()=>setShowPassword((prev)=> !prev)} className="absolute top-[13px] right-6">
                {showPassword ? <IoEyeOutline size={15} /> : <IoEyeOffOutline size={15} />}
              </div>
            </div>

            <input
              type="submit"
              className=" md:text-base btn btn-primary"
              value="Register"
            />
          </form>
          <div className="flex justify-center items-center flex-col space-y-2">
            <p className="text-center">
              Already have an account ? 
              <Link to={"/signIn"}>
                <span className="underline cursor-pointer"> Sign in</span>
              </Link>
              <br /> Or
            </p>
            <span className="flex gap-2 btn border-none">
              <FcGoogle size={25} />
              Login with Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
