import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

const JobListingModal = ({ closeModal, jobToEdit, saveJob }) => {
  const closeBtn = () => closeModal();

  // ⭐ IMPORTANT: FORM STATE
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    employmentType: "",
    securityLevel: "",
    salary: "",
    companyName: "",
    companyLocation: "",
    companyLogo: "",
  });

  // ⭐ Load data in edit mode
  useEffect(() => {
    if (jobToEdit) {
      setFormData(jobToEdit);
    }
  }, [jobToEdit]);

  // ⭐ Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ⭐ Handle file upload
  const handleFile = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setFormData({
      ...formData,
      companyLogo: url,
    });
  };

  // ⭐ Save job (add or edit)
  const handleSubmit = () => {
    saveJob(formData);
  };

  return (
    <section className="p-6 bg-slate-200 rounded-3xl shadow-lg w-[600px] mx-auto z-50">
      <div className="titleSection flex items-center justify-between mb-4">
        <span className="font-bold text-lg">
          {jobToEdit ? "Edit Job" : "Add Job"}
        </span>
        <span onClick={closeBtn} className="cursor-pointer">
          <ImCross />
        </span>
      </div>

      <form className="space-y-6">
        {/* Job Title */}
        <div className="inputContainer flex flex-col space-y-1">
          <label>Job Title *</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
          />
        </div>

        {/* Job Type + Employment Type */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col space-y-1 flex-1">
            <label>Job Type *</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1 flex-1">
            <label>Employment Type *</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
            >
              <option value="">Select Employment Type</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Seniority Level + Salary */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col space-y-1 flex-1">
            <label>Seniority Level *</label>
            <select
              name="securityLevel"
              value={formData.securityLevel}
              onChange={handleChange}
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
            >
              <option value="">Select Seniority</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
              <option value="Lead">Lead</option>
              <option value="Director">Director</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1 flex-1">
            <label>Salary *</label>
            <input
              type="number"
              name="salary"
              placeholder="Enter Salary"
              value={formData.salary}
              onChange={handleChange}
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
            />
          </div>
        </div>

        {/* Company Name + Location */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col space-y-1 flex-1">
            <label>Company Name *</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
            />
          </div>

          <div className="flex flex-col space-y-1 flex-1">
            <label>Company Location *</label>
            <input
              type="text"
              name="companyLocation"
              placeholder="Enter Location"
              value={formData.companyLocation}
              onChange={handleChange}
              className="outline-none bg-gray-400 text-white rounded-xl px-3 py-3"
            />
          </div>
        </div>

        {/* Company Logo */}
        <div className="flex flex-col space-y-1">
          <label>Company Logo *</label>
          <input
            type="file"
            name="companyLogo"
            accept="image/*"
            onChange={handleFile}
            className="file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-lg bg-gray-400 text-white rounded-xl px-3 py-3"
          />
        </div>

        {/* CTA Buttons */}
        <div className="cta space-x-5 text-white">
          <button
            type="button"
            onClick={closeBtn}
            className="px-5 py-2 rounded-md bg-gray-500 hover:bg-gray-600"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
          >
            {jobToEdit ? "Update Job" : "Publish"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobListingModal;
