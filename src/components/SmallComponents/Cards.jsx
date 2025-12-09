import React from "react";
import { FaEdit, FaRegTrashAlt, FaTrashAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <section className="space-y-3 p-5 border-2 border-black rounded-2xl shadow-lg hover:shadow-xl w-80">
      <div className="topPart flex items-center justify-between">
        <img src="" alt="logo" className="w-9 h-9 object-center" />
        <div className="date">July 7, 2022</div>
      </div>
      <div className="jobTitleCompany">
        <h2>Senior Backend Engineer</h2>
        <h4>Binance</h4>
      </div>
      <div className="empType space-x-3 text-slate-600">
        <span className="bg-gray-300 px-3 py-2 rounded-full">On Site</span>
        <span>PHP</span>
        <span>Part Time</span>
      </div>
      <div className="furtherInfo flex flex-auto gap-5">
        <div className="location">
          <span>Hong Kong</span>
        </div>
        <div className="salary">
          <span>Nrs.5,000</span>
        </div>
        <div className="jobType">
          <span>Developers</span>
        </div>
      </div>
      <div className="cta gap-3 flex justify-end">
        <button className="bg-gray-300 p-3 rounded-full text-center hover:text-green-600 transition-all ">
          <FaEdit size={20} />
        </button>
        <button className="bg-gray-300 p-3 rounded-full text-center hover:text-red-600">
          <FaTrashAlt size={20} />
        </button>
      </div>
    </section>
  );
};

export default Cards;
