import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUserWithEmail,
    setLoading,
    UserUpdateProfile,
    signInWithGoogle,
  } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password, name, PhotoUrl } = userData;
    const UpdateUserData = {
      displayName: name,
      photoURL: PhotoUrl,
    };
    const Regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!Regex.test(password)) {
      return toast.error("Password must be 6+ chars with upper & lower case");
    }
    createUserWithEmail(email, password)
      .then(() => {
        UserUpdateProfile(UpdateUserData)
          .then(() => {
            toast.success("Register Successfully");
            navigate(location?.state || "/");
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.code);
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.code);
      });
  };

  const handlerGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="bg-base-200">
      <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center py-10">
        <div>
          <form
            onSubmit={handlerSubmit}
            className="fieldset border-base-300 rounded-box w-xs md:w-md border md:text-base p-4 *:focus:outline-none *:border-none "
          >
            <h3 className="text-2xl md:text-4xl text-center font-semibold">
              Register
            </h3>
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              className="input rounded-lg w-full "
              placeholder="Enter your name"
            />

            <label>Photo Url</label>
            <input
              type="text"
              name="PhotoUrl"
              required
              className="input rounded-lg w-full"
              placeholder="Your photo link"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              className="input rounded-lg w-full"
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

            <input
              type="submit"
              className=" md:text-base mt-1 btn btn-primary"
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
            <span
              onClick={handlerGoogle}
              className="flex gap-2 btn border-none"
            >
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
