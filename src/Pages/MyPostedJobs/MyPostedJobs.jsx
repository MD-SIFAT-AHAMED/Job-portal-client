import React, { Suspense } from "react";
import { myPostedJobPromise } from "../../Api/JobsApi";
import Loading from "../Shared/Loading";
import MyPostedJobsList from "./MyPostedJobsList";
import useAuth from "../../Hooks/useAuth";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <h2 className="text-2xl md:text-4xl text-center font-bold my-5">
        My Posted Jobs
      </h2>
      <div className="w-full">
        <Suspense fallback={<Loading />}>
          <MyPostedJobsList
            myPostedJobPromise={myPostedJobPromise(user.email)}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default MyPostedJobs;
