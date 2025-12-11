import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import FilterType from "../components/SmallComponents/FilterType";
import {
  jobTypes,
  skills,
  employmentTypes,
  seniorityLevels,
  locations,
} from "../jobs";

const Filter = ({
  onSearch,
  selectedJobTypes,
  setSelectedJobTypes,
  selectedEmployment,
  setSelectedEmployment,
  selectedSeniority,
  setSelectedSeniority,
  selectedLocations,
  setSelectedLocations,
  selectedSkills,
  setSelectedSkills,
}) => {
  const [input, setInput] = useState("");

  const handleSearch = (value) => {
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="hidden md:flex flex-col max-w-sm space-y-5 border p-3 rounded-3xl shadow-sm h-fit">
      <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 border border-gray-300">
        <CiSearch size={22} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search using keywords"
          className="flex-1 bg-transparent outline-none text-gray-800"
          value={input}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <FilterType
        title="Job Type"
        data={jobTypes}
        selectedItems={selectedJobTypes}
        onSelect={setSelectedJobTypes}
      />
      <FilterType
        title="Employment Type"
        data={employmentTypes}
        selectedItems={selectedEmployment}
        onSelect={setSelectedEmployment}
      />
      <FilterType
        title="Seniority"
        data={seniorityLevels}
        selectedItems={selectedSeniority}
        onSelect={setSelectedSeniority}
      />
      <FilterType
        title="Location"
        data={locations}
        selectedItems={selectedLocations}
        onSelect={setSelectedLocations}
      />
      <FilterType
        title="Skills"
        data={skills}
        selectedItems={selectedSkills}
        onSelect={setSelectedSkills}
      />
    </div>
  );
};

export default Filter;
