import React from "react";
import SectionOne from "../layout/landingPageSection/SectionOne";
import SectionThree from "../layout/landingPageSection/SectionThree";
import SectionTwo from "../layout/landingPageSection/SectionTwo";
import NavBar from "../layout/NavBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="grid-3">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
};

export default LandingPage;
