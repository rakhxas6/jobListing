import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

const JobListingModal = ({ closeModal, jobToEdit, saveJob }) => {
  const closeBtn = () => closeModal();

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

  useEffect(() => {
    if (jobToEdit) setFormData(jobToEdit);
  }, [jobToEdit]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData({ ...formData, companyLogo: url });
    }
  };

  const handleSubmit = () => saveJob(formData);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-gray-100 rounded-3xl shadow-lg w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-600">
            {jobToEdit ? "Edit Job" : "Add Job"}
          </h2>
          <span
            onClick={closeBtn}
            className="cursor-pointer text-gray-600 hover:text-red-500 transition"
          >
            <ImCross size={20} />
          </span>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Job Title */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Type + Employment Type */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="font-medium text-gray-700">Job Type *</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-medium text-gray-700">
                Employment Type *
              </label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Employment Type</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Seniority Level + Salary */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="font-medium text-gray-700">
                Seniority Level *
              </label>
              <select
                name="securityLevel"
                value={formData.securityLevel}
                onChange={handleChange}
                className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Seniority</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
                <option value="Director">Director</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-medium text-gray-700">Salary *</label>
              <input
                type="number"
                name="salary"
                placeholder="Enter Salary"
                value={formData.salary}
                onChange={handleChange}
                className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Company Name + Location */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="font-medium text-gray-700">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-medium text-gray-700">
                Company Location *
              </label>
              <input
                type="text"
                name="companyLocation"
                placeholder="Enter Location"
                value={formData.companyLocation}
                onChange={handleChange}
                className="mt-1 rounded-xl px-3 py-2 outline-none bg-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Company Logo */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Company Logo *</label>
            <input
              type="file"
              name="companyLogo"
              accept="image/*"
              onChange={handleFile}
              className="mt-1 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-lg bg-gray-200 text-gray-900 rounded-xl px-3 py-2 outline-none"
            />
            {/* {formData.companyLogo && (
              <img
                src={formData.companyLogo}
                alt="Company Logo Preview"
                className="mt-3 h-9 w-9 object-contain rounded-lg border"
              />
            )} */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-4">
            <button
              type="button"
              onClick={closeBtn}
              className="px-5 py-2 rounded-xl bg-gray-500 text-white hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {jobToEdit ? "Update Job" : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobListingModal;
