import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const JobListingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {};

  return (
    <section className="p-6 bg-slate-200 rounded-3xl shadow-lg w-[600px] mx-auto">
      <div className="titleSection flex items-center justify-between mb-4">
        <span className="font-bold text-lg">Add Job</span>
        <span onClick={() => setIsOpen()}>
          <ImCross />
        </span>
      </div>
      <form className="space-y-6">
        {/* Job Title */}
        <div className="inputContainer flex flex-col space-y-1">
          <label htmlFor="jobtitle">
            Job Title <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            placeholder="Enter Job Title"
            className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
          />
        </div>

        {/* Job Type + Employment Type */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="inputContainer flex flex-col space-y-1 flex-1">
            <label htmlFor="jobtype">
              Job Type <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="jobtype"
              name="jobtype"
              placeholder="e.g. Full-Time"
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
            />
          </div>

          <div className="inputContainer flex flex-col space-y-1 flex-1">
            <label htmlFor="employmenttype">
              Employment Type <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="employmenttype"
              name="employmenttype"
              placeholder="e.g. Remote / On-site"
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
            />
          </div>
        </div>

        {/* Security Level + Salary */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="inputContainer flex flex-col space-y-1 flex-1">
            <label htmlFor="securitylevel">
              Security Level <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="securitylevel"
              name="securitylevel"
              placeholder="e.g. Entry / Mid / Senior"
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
            />
          </div>

          <div className="inputContainer flex flex-col space-y-1 flex-1">
            <label htmlFor="salary">
              Salary <span className="text-blue-500">*</span>
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              placeholder="Enter Salary in Nrs."
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
            />
          </div>
        </div>

        {/* Company Name + Company Location */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="inputContainer flex flex-col space-y-1 flex-1">
            <label htmlFor="companyname">
              Company Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="companyname"
              name="companyname"
              placeholder="Enter Company Name"
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
            />
          </div>

          <div className="inputContainer flex flex-col space-y-1 flex-1">
            <label htmlFor="companylocation">
              Company Location <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="companylocation"
              name="companylocation"
              placeholder="Enter Company Location"
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3 placeholder-white/60"
            />
          </div>
        </div>

        {/* Company Logo Upload */}
        <div className="inputContainer flex flex-col space-y-1">
          <label htmlFor="companylogo">
            Company Logo <span className="text-blue-500">*</span>
          </label>
          <input
            type="file"
            id="companylogo"
            name="companylogo"
            accept="image/*"
            className="file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none bg-gray-400 text-white rounded-xl px-3 py-3"
          />
        </div>

        <div className="cta space-x-5 text-white ">
          <button
            type="button"
            className="px-5 py-2  rounded-md bg-gray-500  hover:bg-gray-600 transition "
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
          >
            Publish
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobListingModal;
