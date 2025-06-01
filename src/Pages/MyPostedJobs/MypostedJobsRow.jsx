import React from "react";

const MypostedJobsRow = ({post,index}) => {
    const {title,deadline}=post;
  return (
    <>
      <tr className="bg-base-200">
        <th>{index+1}</th>
        <td>{title}</td>
        <td>{deadline}</td>
        <td>Blue</td>
      </tr>
    </>
  );
};

export default MypostedJobsRow;
