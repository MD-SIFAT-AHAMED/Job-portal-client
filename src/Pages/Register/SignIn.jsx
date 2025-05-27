import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signInWithEmail,signInWithGoogle}=use(AuthContext);
  const navigate = useNavigate();

  const handlerSubmit=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmail(email,password)
    .then(()=>{
      toast.success("SignIn Successfully");
      navigate('/');
    })
    .catch((err)=>{
      toast.error(err.code);
    })
  }
  const handlerGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login Successfully");
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="bg-base-200">
      <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center py-10">
        <div>
          <form onSubmit={handlerSubmit} className="fieldset border-base-300 rounded-box w-xs md:w-md border md:text-base p-4 *:focus:outline-none *:border-none *:w-full">
            <h3 className="text-2xl md:text-4xl text-center font-semibold">Sign In</h3>
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
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="input rounded-lg border-none focus:outline-none w-full"
                placeholder="**********"
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-[13px] right-6 z-1"
              >
                {showPassword ? (
                  <IoEyeOutline size={15} />
                ) : (
                  <IoEyeOffOutline size={15} />
                )}
              </div>
            </div>
            <Link to={"/forgotPassword"}>
              <p className="mt-1 cursor-pointer w-fit hover:underline">
                Forgot Password
              </p>
            </Link>

            <input
              type="submit"
              className=" md:text-base btn btn-primary"
              value="Sign In"
            />
          </form>
          <div onClick={handlerGoogle} className="flex justify-center items-center flex-col space-y-2">
            <p className="text-center">
              Don't have an account ?
              <Link to={"/register"}>
                <span className="underline cursor-pointer"> Register</span>
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

export default SignIn;
