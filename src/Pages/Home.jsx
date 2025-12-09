import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import JobListingModal from "../components/JobListingModal";
import Cards from "../components/SmallComponents/Cards";
import Filter from "./Filter";

const Home = () => {
  return (
    <div className="px-4 py-2 rounded-3xl  h-auto">
      <Navbar />
      <LandingPage />

      {/* cards */}

      <Cards />
      
      <Filter/>
      {/* job listing modal */}

      <JobListingModal />
    </div>
  );
};

export default Home;
