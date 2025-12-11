import Footer from "../components/Footer";
import JobListingModal from "../components/JobListingModal";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FilterPage from "./FilterPage";

const Home = () => {
  return (
    <div className=" rounded-3xl  h-auto">
      <Navbar />
      <LandingPage />

      {/* <JobListingModal /> */}
      <FilterPage JobListingModal={JobListingModal} />

      <Footer/>
    </div>
  );
};

export default Home;
