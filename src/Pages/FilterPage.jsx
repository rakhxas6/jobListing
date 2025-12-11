import React, { useState } from "react";
import Filter from "./Filter";
import Cards from "../components/SmallComponents/Cards";
import jobsData from "../jobs.json";

const FilterPage = ({ JobListingModal }) => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState(jobsData);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // FILTERED JOBS
  const filteredJobs = jobs.filter((job) => {
    const keyword = searchTerm?.toLowerCase();
    return (
      job.title?.toLowerCase().includes(keyword) ||
      job.company?.toLowerCase().includes(keyword) ||
      job.location?.toLowerCase().includes(keyword) ||
      job.skills.join(" ").toLowerCase().includes(keyword)
    );
  });

  // Delete handler
  const handleDelete = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setOpen(true);
  };

  const saveJob = (job) => {
    if (editingJob) {
      setJobs((prev) => prev.map((j) => (j.id === job.id ? job : j)));
    } else {
      setJobs((prev) => [...prev, { ...job, id: Date.now() }]);
    }
    setEditingJob(null);
    setOpen(false);
  };

  const handleModal = () => {
    setEditingJob(null);
    setOpen(true);
  };

  return (
    <div className="mb-4">
      {open ? (
        <JobListingModal
          closeModal={() => {
            setOpen(false);
            setEditingJob(null);
          }}
          jobToEdit={editingJob}
          saveJob={saveJob}
        />
      ) : (
        <>
          <div className="filterNav">
            <ul className="flex flex-row items-center justify-around p-3">
              <li className="hidden md:flex text-lg font-semibold">Filter</li>
              <li className="text-lg font-semibold">
                {filteredJobs.length} Jobs
              </li>
              <li>
                <button
                  onClick={handleModal}
                  className="px-5 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700"
                >
                  Add New Job
                </button>
              </li>
            </ul>
          </div>

          <div className="cardWrapper flex flex-col md:flex-row gap-5 justify-center">
            <Filter onSearch={(v) => setSearchTerm(v)} />

            <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
              {filteredJobs.map((job) => (
                <Cards
                  key={job.id}
                  job={job}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterPage;
