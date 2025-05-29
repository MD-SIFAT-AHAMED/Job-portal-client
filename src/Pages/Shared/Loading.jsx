import Lottie from "lottie-react";
import React from "react";
import loadingAnime from "../../assets/lotties/spinner.json";

const Loading = () => {
  return (
    <div className="">
      <Lottie animationData={loadingAnime} loop={true}></Lottie>
    </div>
  );
};

export default Loading;
