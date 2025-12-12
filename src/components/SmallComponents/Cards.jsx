import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Cards = ({ job, onDelete, onEdit }) => {
  return (
    <section className="flex flex-col gap-5  p-4 border border-gray-400/30 rounded-2xl shadow-lg hover:shadow-2xl w-80  max-h-fit">
      <div className="topPart flex items-center justify-between">
        <img
          src={job.companyLogo}
          alt="logo"
          className="w-9 h-9 object-center border rounded-full overflow-hidden"
        />
        <div className="date">{job.postedDate}</div>
      </div>
      <div className="jobTitleCompany">
        <h2>{job.jobTitle}</h2>
        <h4>{job.companyName}</h4>
      </div>
      <div className="empType space-x-3 text-slate-600">
        <span className="bg-gray-300 px-3 py-2 rounded-full">
          {job.employmentType}
        </span>
        <span>{job.skills[0]}</span>
        <span>{job.workMode}</span>
      </div>
      <div className="furtherInfo flex flex-auto gap-2">
        <div className="location">
          <span>{job.location}</span>
        </div>
        <div className="salary">
          <span>{job.salary}</span>
        </div>
        <div className="jobType">
          <span>{job.jobType}</span>
        </div>
      </div>
      <span className="cta gap-3 flex justify-end">
        <button
          onClick={() => onEdit(job)}
          className="bg-gray-300 p-3 rounded-full text-center hover:text-green-600 transition-all"
        >
          <FaEdit size={16} />
        </button>
        <button
          className="bg-gray-300 p-3 rounded-full text-center hover:text-red-600 transition-all"
          onClick={() => onDelete(job.id)}
        >
          <FaTrashAlt size={16} />
        </button>
      </span>
    </section>
  );
};

export default Cards;
