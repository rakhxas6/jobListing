import React, { useState } from "react";
import Filter from "./Filter";
import Cards from "../components/SmallComponents/Cards";
import jobsData from "../jobs.json";

const FilterPage = ({ JobListingModal }) => {
   const [open, setOpen] = useState(false);

   const handleModal = () => {
     setOpen(true);
   };
  return (
    <div className="">
      {/* Modal renders here when open */}
      {open ? (
        <JobListingModal closeModal={() => setOpen(false)} />
      ) : (
        <>
          <div className="filterNav ">
            <ul className="flex flex-row items-center justify-around p-3">
              <li className="hidden md:flex text-lg font-semibold">Filter</li>
              <li className="text-lg font-semibold">{jobsData.length} Jobs</li>
              <li>
                <button
                  onClick={handleModal}
                  type="button"
                  className="px-5 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700 transition outline-none"
                >
                  Add New Job
                </button>
              </li>
            </ul>
          </div>
          <div className="cardWrapper justify-center flex flex-col md:flex-row gap-5">
            <Filter />
            <div className="cards grid grid-cols-1 sm:grid-cols-2  gap-4 place-items-center">
              {jobsData.map((job) => (
                <Cards key={job.id} job={job} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterPage;
