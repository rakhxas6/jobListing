import React, { useState } from "react";
import Filter from "./Filter";
import Cards from "../components/SmallComponents/Cards";
import jobsData from "../jobs.json";

const FilterPage = ({ JobListingModal }) => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState(jobsData);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedEmployment, setSelectedEmployment] = useState([]);
  const [selectedSeniority, setSelectedSeniority] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);


  // FILTERED JOBS
 const filteredJobs = jobs.filter((job) => {
   const keyword = searchTerm?.toLowerCase();

   // Check search term
   const matchesSearch =
     job.jobTitle?.toLowerCase().includes(keyword) ||
     job.companyName?.toLowerCase().includes(keyword) ||
     job.companyLocation?.toLowerCase().includes(keyword) ||
     job.skills.join(" ").toLowerCase().includes(keyword);

   // Check filter selections
   const matchesJobType =
     selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType);

   const matchesEmploymentType =
     selectedEmployment.length === 0 ||
     selectedEmployment.includes(job.employmentType);

   const matchesSeniority =
     selectedSeniority.length === 0 ||
     selectedSeniority.includes(job.securityLevel);

   const matchesLocation =
     selectedLocations.length === 0 ||
     selectedLocations.includes(job.companyLocation);

   const matchesSkills =
     selectedSkills.length === 0 ||
     job.skills.some((skill) => selectedSkills.includes(skill));

   // Job passes all filters
   return (
     matchesSearch &&
     matchesJobType &&
     matchesEmploymentType &&
     matchesSeniority &&
     matchesLocation &&
     matchesSkills
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
    <div className="mb-4 relative">
      {/* Page content always rendered */}
      <div>
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
          {/* Filter */}
          <div className="filter">
            <Filter
              onSearch={(v) => setSearchTerm(v)}
              selectedJobTypes={selectedJobTypes}
              setSelectedJobTypes={setSelectedJobTypes}
              selectedEmployment={selectedEmployment}
              setSelectedEmployment={setSelectedEmployment}
              selectedSeniority={selectedSeniority}
              setSelectedSeniority={setSelectedSeniority}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
            />
          </div>

          {/* Cards */}
          <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center md:place-items-start">
            {filteredJobs.length === 0 ? (
              <div className="w-[300px] flex py-10 text-gray-600 text-lg justify-center">
                No jobs found!!!
              </div>
            ) : (
              filteredJobs.map((job) => (
                <Cards
                  key={job.id}
                  job={job}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {open && (
        <JobListingModal
          closeModal={() => {
            setOpen(false);
            setEditingJob(null);
          }}
          jobToEdit={editingJob}
          saveJob={saveJob}
        />
      )}
    </div>
  );
};

export default FilterPage;
