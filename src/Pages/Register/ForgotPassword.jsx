import React from "react";

const ForgotPassword = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center py-10">
        <div>
          <form className="fieldset border-base-300 rounded-box w-xs md:w-md border md:text-base  p-4 *:focus:outline-none *:border-none">
            <h3 className="text-2xl md:text-3xl text-center font-semibold">Forgot Password</h3>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              className="input w-full rounded-lg"
              placeholder="example@gmail.com"
            />
            <input
              type="submit"
              className=" md:text-base mt-2 btn btn-primary"
              value="Forgot Password"
            />
          </form>
    
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
