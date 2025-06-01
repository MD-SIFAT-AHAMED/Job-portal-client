import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const MyApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);
  return (
    <div>
      <div>
        <h3 className="text-3xl md:text-4xl  text-center my-8 font-bold">
          Jobs Applied so far
        </h3>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>No</label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <JobApplicationRow
                  key={application._id}
                  index={index}
                  application={application}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplicationsList;
