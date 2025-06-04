import React from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const JobApply = () => {

  const { id: jobId } = useParams();
  const { user } = useAuth();
  // console.log(user);

  const handlerApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const applyData = Object.fromEntries(formData.entries(formData));
    applyData.applicant=user.email;
    applyData.jobId=jobId;
    // console.log(applyData);
    
    axios.post('http://localhost:5000/applications',applyData)
    .then(res => 
    {
      if(res.data.insertedId)
      {
        toast.success("Apply Successfuly");
      }
    }
    )
    .catch(err=>{
      toast.error(err);
    })
  }

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center my-10">
      <h3 className="text-3xl my-5">Apply Job for </h3>
      <form
        onSubmit={handlerApplySubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4 *:focus:outline-none md:text-base *:border-none "
      >
        <label className="label">LinkedIn Link</label>
        <input
          type="url"
          name="linkedIn"
          required
          className="input w-full"
          placeholder="LinkedIn Profile Link"
        />

        <label className="label">Github Link</label>
        <input
          type="text"
          name="github"
          required
          className="input w-full"
          placeholder="Github Link"
        />

        <label className="label">Resume Link</label>
        <input
          type="url"
          name="resume"
          required
          className="input w-full"
          placeholder="Resume Link"
        />

        <input
          type="submit"
          value="Apply"
          className="btn !text-white btn-primary my-2 w-full"
        />
      </form>
    </div>
  );
};

export default JobApply;
