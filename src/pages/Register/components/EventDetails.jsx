import { useContext, useEffect } from "react";
import PageLayout from "../../../Components/PageLayout";
import { MultiStepContext } from "../StepContext";
import { events } from "../../../constants/formEvents";

export default function EventDetails() {
  const { setCurrStep, userData, setUserData } = useContext(MultiStepContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setUserData((prevData) => {
      const newEvents = { ...prevData.events };
      const newPricing = { ...prevData.pricing };

      if (checked) {
        // Automatically check the first radio button when the checkbox is selected
        const firstPricingOption = Object.keys(
          events.find((e) => e.title === name).entryFee[
            userData.college === "NITS"
              ? "NIT Srinagar Students"
              : "Other Institute Students"
          ]
        )[0];
        newEvents[name] = true;
        newPricing[name] = firstPricingOption;
      } else {
        // Remove the event from the events object and pricing object when the checkbox is unchecked
        delete newEvents[name];
        delete newPricing[name];
      }

      return {
        ...prevData,
        events: newEvents,
        pricing: newPricing,
      };
    });
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      pricing: { ...prevData.pricing, [name]: value },
    }));
  };

  const calculateTotal = () => {
    const instituteType =
      userData.college === "NITS"
        ? "NIT Srinagar Students"
        : "Other Institute Students";
    let total = 0;

    for (const event of events) {
      if (userData.events?.[event.title]) {
        const selectedOption = userData.pricing?.[event.title];
        if (selectedOption) {
          const priceString = event.entryFee[instituteType][selectedOption];
          const price = parseInt(priceString.match(/₹ (\d+)/)[1]);
          total += price;
        }
      }
    }

    setUserData((prevData) => ({
      ...prevData,
      totalPrice: total,
    }));
  };

  useEffect(() => {
    calculateTotal();
  }, [userData.events, userData.pricing]);

  const instituteType =
    userData.college === "NITS"
      ? "NIT Srinagar Students"
      : "Other Institute Students";

  return (
    <PageLayout title={"Register"} imgUrl={"/events/visual-cover.jpg"}>
      <div className="bg-background ShadowLarge pb-8">
        <div className="font-playfair text-center px-8 pt-8">
          <p className="text-primary font-extrabold font-neotriad text-3xl md:text-5xl leading-normal">
            Event Selection
          </p>
        </div>
        <div className="px-8">
          <form className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <label className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    name={event.title}
                    checked={userData.events?.[event.title] || false}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="text-lg font-medium text-gray-900">
                    {event.title}
                  </span>
                </label>
                <div className="mt-4">
                  {Object.keys(event.entryFee[instituteType]).map(
                    (pricingOption) => (
                      <label
                        key={pricingOption}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="radio"
                          name={event.title}
                          value={pricingOption}
                          checked={
                            userData.pricing?.[event.title] === pricingOption
                          }
                          onChange={handleRadioChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          disabled={!userData.events?.[event.title]} // Disable radio if checkbox is not checked
                        />
                        <span className="text-base text-gray-700">
                          {pricingOption} -{" "}
                          {event.entryFee[instituteType][pricingOption]}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>
            ))}
          </form>
          <div className="mt-8 p-4 bg-white rounded-lg ">
            <p className="text-xl font-medium">
              <span className="font-neotriad text-primary font-semibold text-3xl">Total Price:</span> ₹ {userData.totalPrice}
            </p>
          </div>
          <div className="px-8 py-4 flex items-center gap-8 justify-center">
            <button
              onClick={() => setCurrStep((prev) => prev + 1)}
              className="bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
