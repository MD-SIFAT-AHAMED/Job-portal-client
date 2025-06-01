import React from "react";
import { Link } from "react-router";

const MypostedJobsRow = ({post,index}) => {
    const {title,deadline,application_count}=post;
  return (
    <>
      <tr className="bg-base-200">
        <th>{index+1}</th>
        <td>{title}</td>
        <td>{deadline}</td>
        <td>{application_count}</td>
        <td><Link to={`/applications/${post._id}`}>View Application</Link></td>
      </tr>
    </>
  );
};

export default MypostedJobsRow;
