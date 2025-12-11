import Footer from "../components/Footer";
import JobListingModal from "../components/JobListingModal";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import FilterPage from "./FilterPage";

const Home = ({ user, setUser }) => {
  return (
    <div className=" rounded-3xl  h-auto">
      <Navbar user={user} setUser={setUser} />
      <LandingPage />

      {/* <JobListingModal /> */}
      <FilterPage JobListingModal={JobListingModal} />

      <Footer />
    </div>
  );
};

export default Home;
