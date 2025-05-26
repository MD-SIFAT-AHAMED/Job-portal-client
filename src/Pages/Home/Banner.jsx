import React from "react";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen overflow-hidden">
        <div className="hero-content  flex-col lg:flex-row-reverse md:gap-10">
          <div className="flex-1">
            <motion.img
            animate={{x:[0,100,0]}}
            transition={{ease:"easeOut",duration:8,delay:5,repeat: Infinity}}
            src={banner1}
            className="max-w-sm rounded-2xl shadow-2xl"
          />
            <motion.img
            animate={{y:[0,-100,0]}}
            transition={{ease:"easeOut",duration:12,delay:5,repeat: Infinity}}
            src={banner2}
            className="max-w-sm rounded-2xl shadow-2xl"
          />
          </div>
          <div className="flex-1 md:pl-10">
            <h1 className="text-2xl md:text-5xl font-bold">
              Got Talent ? <br /> Meet Opportunity
            </h1>
            <p className="py-6">
              ind Jobs, Employment & Career Opportunities. Some of the companies
              we've helped recruit excellent applicants over the years.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
