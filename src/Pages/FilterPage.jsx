import React from 'react'
import Filter from './Filter'
import Cards from '../components/SmallComponents/Cards'
import jobsData  from '../jobs.json'

const FilterPage = () => {
  return (
    <div className=' gap-5 my-5'>
        <div className="filterNav ">
            <ul className='flex flex-row items-center justify-between'>
                <li>Filter</li>
                <li>5,283 Jobs</li>
                <li>
                    <button
            type="button"
            className="px-5 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700 transition"
          >
             Add New Job
          </button>
                    
                </li>

            </ul>
        </div>
        <div className="cardWrapper flex flex-col md:flex-row  gap-5">

        <Filter/>

        {jobsData.map((job) => (
  <Cards key={job.id} job={job} />
))}

        </div>
    </div>
  )
}

export default FilterPage