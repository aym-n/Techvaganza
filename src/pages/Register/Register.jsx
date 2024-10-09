import RegisterHome from "./pages/RegisterHome";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop";

export default function Register() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<RegisterHome />} />
      </Routes>
    </>
  );
}
