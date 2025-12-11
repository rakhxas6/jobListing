import React, { useState } from "react";

const FilterType = ({ title, data, selectedItems = [], onSelect }) => {
  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      onSelect([]); // Deselect
    } else {
      onSelect([item]); // Only select one
    }
  };


  return (
    <div>
      <span className="font-semibold">{title}</span>

      <div className="flex flex-wrap gap-2 mt-3">
        {data.map((type, index) => {
          const isSelected = selectedItems.includes(type);
          return (
            <span
              key={index}
              onClick={() => handleClick(type)}
              className={`
                px-3 py-2 rounded-full text-sm cursor-pointer transition
                ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200/60 hover:bg-slate-400"
                }
              `}
            >
              {type}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FilterType;
