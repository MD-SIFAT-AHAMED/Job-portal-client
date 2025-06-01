import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);

  const handlerStatusChange = (e, applied_id) => {
    console.log(e.target.value, applied_id);

    axios
      .patch(`http://localhost:5000/applications/${applied_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.matchedCount) {
          toast.success("Status Update Successfuly");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        {applications.length} Applications for : {job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((applyer, index) => (
              <tr className="bg-base-200" key={applyer._id}>
                <th>{index + 1}</th>
                <td>{applyer.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    defaultValue={applyer.status}
                    onChange={(e) => handlerStatusChange(e, applyer._id)}
                    className="select select-primary"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
