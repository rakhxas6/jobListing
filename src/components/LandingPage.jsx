import React from "react";
import { WiStars } from "react-icons/wi";

const LandingPage = () => {
  return (
    <div className="flex items-center flex-col gap-3 py-20">
      <div className="text-4xl font-bold flex flex-col items-center space-y-3">
        <div>
          The <span className="text-blue-600">Most Complete</span> Job{" "}
        </div>

        <div className="flex items-center">
          <span className="text-blue-600">
            <WiStars />
          </span>
          Listings In The World
          <span className="text-blue-600">
            <WiStars />
          </span>
        </div>
      </div>
      <h5 className="text-md">Discover the job you want at top companies.</h5>
    </div>
  );
};

export default LandingPage;
