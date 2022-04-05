import React from "react";
import SectionOne from "../layout/landingPageSection/SectionOne";
import SectionThree from "../layout/landingPageSection/SectionThree";
import SectionTwo from "../layout/landingPageSection/SectionTwo";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <h4 className="text-center text-gray">INCIDENT ESCALATION PROCEDURE</h4>
      <div className="grid-3">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
