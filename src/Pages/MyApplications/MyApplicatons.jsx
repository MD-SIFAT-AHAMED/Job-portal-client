import React, { Suspense } from "react";
import MyApplicationsStats from "./MyApplicationsStats";
import MyApplicationsList from "./MyApplicationsList";
import useAuth from "../../Hooks/useAuth";
import Loading from "../Shared/Loading";
import useApplicationApi from "../../Api/useApplicationApi";

const MyApplicatons = () => {
  const { user } = useAuth();
  const { myApplicationsPromise } = useApplicationApi();
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto place-items-center my-10 ">
      <MyApplicationsStats />
      <div className="w-full overflow-x-auto ">
        <Suspense fallback={<Loading />}>
          <MyApplicationsList
            myApplicationsPromise={myApplicationsPromise(user.email)}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default MyApplicatons;
