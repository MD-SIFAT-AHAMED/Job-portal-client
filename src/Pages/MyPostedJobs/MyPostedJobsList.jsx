import React, { use } from "react";
import MypostedJobsRow from "./MypostedJobsRow";

const MyPostedJobsList = ({ myPostedJobPromise }) => {
  const myPostedJobs = use(myPostedJobPromise);
  // console.log(myPostedJobs);
  return (
    <div >
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {myPostedJobs.map((post,index) => (
              <MypostedJobsRow key={post._id} index={index} post={post} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
