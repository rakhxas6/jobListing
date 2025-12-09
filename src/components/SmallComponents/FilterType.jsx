import React from "react";


const FilterType = ({title,data}) => {
  return (
    <div>
      <span className="font-semibold">{title}</span>

      <div className="flex flex-wrap gap-2 mt-3">
        {data.map((type, index) => (
          <span
            key={index}
            className="px-3 py-2 bg-slate-200/60  rounded-full text-sm cursor-pointer hover:bg-slate-400 transition"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterType;
