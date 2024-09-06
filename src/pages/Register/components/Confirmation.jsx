import { useContext } from "react";
import PageLayout from "../../../Components/PageLayout";
import { MultiStepContext } from "../StepContext";

export default function Confirmation() {
  const { setCurrStep, userData, submitData } = useContext(MultiStepContext);

  const selectedEvents = Object.keys(userData.events || {}).filter(
    (event) => userData.events[event]
  );

  return (
    <PageLayout title={"Register"} imgUrl={"/events/visual-cover.jpg"}>
      <div className="bg-background ShadowLarge pb-8">
        <div className="font-playfair text-center px-8 pt-8">
          <p className="text-primary font-extrabold font-neotriad text-3xl md:text-5xl leading-normal">
            Confirmation
          </p>
        </div>
        <div className="px-8 mt-8">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-2xl font-medium font-neotriad text-primary">
              Selected Events:
            </p>
            {userData.events && <ul className="list-disc list-inside mt-4 space-y-2">
              {selectedEvents.map((event, index) => (
                <li key={index} className="text-lg font-kodeMono text-gray-700">
                  {event}: {userData.pricing[event]}
                </li>
              ))}
            </ul>}
            {
              !userData.events && selectedEvents.length === 0 && <p className="text-lg font-kodeMono text-gray-700">No events selected</p>
            }
          </div>
          <div className="mt-8 p-4 bg-white rounded-lg ">
            <p className="text-xl  font-medium">
              <span className="font-neotriad text-primary font-semibold text-3xl">Total Price:</span> ₹ {userData.totalPrice}
            </p>
          </div>
        </div>
        <div className="px-8 py-4 flex items-center gap-8 justify-center">
          <button
            onClick={() => setCurrStep((prev) => prev - 1)}
            className="bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono "
          >
            Change
          </button>
          <button
            onClick={submitData}
            className="bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono "
          >
            {userData.totalPrice === 0 ? "Confirm" : "Pay"}
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
