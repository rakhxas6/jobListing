import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Filter = () => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    // You can use input state here
    console.log("Searching for:", input);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 border border-gray-300 focus-within:border-gray-400 transition">
        <CiSearch size={22} className="text-gray-600" />

        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search using keywords"
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      
    </div>
  );
};

export default Filter;
