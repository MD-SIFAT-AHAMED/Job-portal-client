import React from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  console.log(user);
  return (
    <div className="">
      <h3 className="text-3xl">Apply Job for </h3>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <label className="label">Title</label>
        <input type="text" className="input" placeholder="My awesome page" />

        <label className="label">Slug</label>
        <input type="text" className="input" placeholder="my-awesome-page" />

        <label className="label">Author</label>
        <input type="text" className="input" placeholder="Name" />
      </fieldset>
    </div>
  );
};

export default JobApply;
