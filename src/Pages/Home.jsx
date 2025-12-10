import JobListingModal from "../components/JobListingModal";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FilterPage from "./FilterPage";

const Home = () => {
  return (
    <div className="px-4 py-2 rounded-3xl  h-auto">
      <Navbar />
      <LandingPage />

      {/* <JobListingModal /> */}
      <FilterPage JobListingModal={JobListingModal} />
    </div>
  );
};

export default Home;
