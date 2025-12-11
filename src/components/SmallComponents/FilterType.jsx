import React, { useState } from "react";

const FilterType = ({ title, data, onSelect }) => {
  const [selected, setSelected] = useState(null);

const handleClick = (item) => {
  if (selected === item) {
    // Deselect
    setSelected(null);
    onSelect(""); // clear search filter
  } else {
    // Select
    setSelected(item);
    onSelect(item);
  }
};

  return (
    <div>
      <span className="font-semibold">{title}</span>

      <div className="flex flex-wrap gap-2 mt-3">
        {data.map((type, index) => (
          <span
            key={index}
            onClick={() => handleClick(type)}
            className={`
              px-3 py-2 rounded-full text-sm cursor-pointer transition
              ${
                selected === type
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200/60 hover:bg-slate-400"
              }
            `}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterType;
