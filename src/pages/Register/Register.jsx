import PersonalDetails from "./components/PersonalDetails";
import EventDetails from "./components/EventDetails";
import Confirmation from "./components/Confirmation";
import { useContext } from "react";
import { MultiStepContext } from "./StepContext";
export default function Register() {
  const { currStep } = useContext(MultiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <EventDetails />;
      case 3:
        return <Confirmation />;
      default:
        return <PersonalDetails />;
    }
  }
  return (
    <>
      {showStep(currStep)}
    </>
  );
}
