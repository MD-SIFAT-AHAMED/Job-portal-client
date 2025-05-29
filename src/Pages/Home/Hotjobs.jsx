import React, { use } from "react";
import JobCard from "../Shared/JobCard";

const Hotjobs = ({ jobPromise }) => {
  const jobs = use(jobPromise);
  console.log(jobs);
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
        <h3 className="text-3xl md:text-5xl text-center my-10 font-semibold ">Available Jobs</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center overflow-hidden">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Hotjobs;
