import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const { company_logo, title, description, company, _id, location } = job;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm ">
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
            <Link to={`/jobDetails/${_id}`} >
              <button className="btn btn-primary">Job Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
