import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "../../../../Components/ScrollToTop";
import WomenHome from "./pages/WomenHome";
import WomenCompetitions from "./pages/WomenCompetitions";
import WomenTalks from "./pages/womenTalks";
import WomenInTechDetails from "../Detailing/WomenInTechDetails";
import { competitions, talks } from "../../../../constants/eventDetails-final";

export default function WomenTech() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WomenHome />} />
        <Route path="/competitions" element={<WomenCompetitions />} />
        <Route path="/talks-and-workshops" element={<WomenTalks />} />
        <Route path="women-in-tech/talks-and-workshops/:index" element={<WomenInTechDetails events={talks} />} />
        <Route path="women-in-tech/competitions/:index" element={<WomenInTechDetails events={competitions} />} />
      </Routes>
    </>
  );
}
