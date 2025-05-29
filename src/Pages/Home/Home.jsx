import React, { Suspense } from "react";
import Banner from "./Banner";
import Hotjobs from "./Hotjobs";
import Loading from "../Shared/Loading";

const Home = () => {
  const jobPromise = fetch("http://localhost:5000/jobs").then(res => res.json());
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading/>} >
        <Hotjobs jobPromise={jobPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
