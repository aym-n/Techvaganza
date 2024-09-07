import { Route, Routes } from "react-router-dom";
import EventCategory from "./pages/EventCategory";
import VisualArts from "./pages/VisualArts";
import PerformingArts from "./pages/PerformingArts";
import MuzicalArts from "./pages/MuzicalArts";
import GamingZone from "./pages/GamingZone";
import Others from "./pages/Others";
import EventDetails from "./pages/Detailing/EventDetails";
import AllEvents from "./pages/AllEvents";
import { useEffect } from "react";
import ScrollToTop from "../../Components/ScrollToTop";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<EventCategory />} />
        <Route path="/visual-arts" element={<VisualArts />} />
        <Route path="/performing-arts" element={<PerformingArts />} />
        <Route path="/muzical-arts" element={<MuzicalArts />} />
        <Route path="/gaming-zone" element={<GamingZone />} />
        <Route path="/others" element={<Others />} />
        <Route path="/visual-arts/photography" element={<Photography />} /> */}
        <Route path="/" element={<AllEvents />} />
        <Route path=":index" element={<EventDetails />} />
      </Routes>
    </>
  );
}
