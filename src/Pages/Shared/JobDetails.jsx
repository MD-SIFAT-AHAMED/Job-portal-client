import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const { company_logo, title, description, company, _id, location } = job;
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center my-10">
        <h3 className="text-3xl md:text-4xl my-3 font-semibold">Job Details Of</h3>
      <div className="card bg-base-100 w-96 md:w-130 shadow-sm ">
        <div className="flex items-center gap-3 mt-5 px-7">
          <figure>
            <img className="h-15" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <p className="text-2xl md:text-3xl font-semibold">{company}</p>
            <p className="md:text-lg font-semibold flex items-center gap-1">
              <IoLocationOutline size={15} />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="flex-grow">{description}</p>
          <div className="card-actions justify-end ">
            <Link to={`/jobApply/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
