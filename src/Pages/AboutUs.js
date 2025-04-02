import React from "react";
import AboutUsSection from "../components/AboutUs"; 
import WhoWeAre from "../components/WhoWeAre";
import OurTeam from "../components/OurTeam";
import Oppo from "../components/Oppo";
import VisionMission from "../components/VisionMission";
import Values from "../components/Values";

const AboutUs = () => {
  return (
    <div>
      <AboutUsSection />
      <WhoWeAre />
      <Values />
      <VisionMission />
      <OurTeam />
      <Oppo />
    </div>
  );
}

export default AboutUs;