import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());

    // Process salary range data
    const { max, min, currency, ...newJobData } = jobData;
    newJobData.salaryRange = {
      max,
      min,
      currency,
    };

    //Process requirements
    newJobData.requirements = newJobData.requirements
      .split(",")
      .map((req) => req.trim());

    // Process Responsibilites
    newJobData.responsibilities = newJobData.responsibilities
      .split(",")
      .map((req) => req.trim());
    newJobData.status = "Active";

    // Save job to the Database
    axios
      .post("http://localhost:5000/jobs", newJobData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("This new job has been saved and published");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 place-items-center">
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        Please Add Job
      </h2>

      <form
        onSubmit={handleAddJob}
        className="**:focus:outline-none *:md:text-base **:border-none"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company logo URL"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend"></legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select w-full"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application DeadLine  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Application DeadLine</legend>
          <input type="date" name="deadline" className="input w-full" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Minimum Salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Maximum Salary"
              />
            </div>
            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select w-full"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>RS</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Descripstion */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Job Descripstion</legend>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Job Desciption"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            name="requirements"
            className="textarea w-full"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilites */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">Job responsibilities</legend>
          <textarea
            name="responsibilities"
            className="textarea w-full"
            placeholder="responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>
          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            className="input w-full"
            placeholder="HR Email"
          />
        </fieldset>

        <input
          type="submit"
          value="Add Job"
          className="btn btn-primary w-full my-3"
        />
      </form>
    </div>
  );
};

export default AddJob;
