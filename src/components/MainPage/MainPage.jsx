import React from "react";

import AlertSection from "../AlertSection/AlertSection";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import YouTubeVideos from "../YouTube/YouTubeVideos";

function MainPage() {
  return (
    <div>
      <AlertSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <YouTubeVideos />
    </div>
  );
}

export default MainPage;
