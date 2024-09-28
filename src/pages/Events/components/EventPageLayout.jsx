import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const tier1Fee = "149";
const tier2Fee = "99";
const tier3Fee = "49";

const EventsPageLayout = ({ events }) => {
  const tier1Competitions = events.filter(
    (event) => event["Outside Entry Fee"] === tier1Fee
  );
  const tier2Competitions = events.filter(
    (event) => event["Outside Entry Fee"] === tier2Fee
  );
  const tier3Competitions = events.filter(
    (event) => event["Outside Entry Fee"] === tier3Fee
  );
  return (
    <div className="bg-background ShadowLarge">
      <div className="font-playfair px-8 pt-8 ">
        <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl overflow-visible">
          Event List
        </p>
      </div>
      <div>
        <Tabs>
          <TabList className="flex my-2">
            <div className="flex items-center justify-center w-full gap-1 md:gap-5">
              <Tab
                className="px-8 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
                selectedClassName="active-tab"
              >
                Tier A
              </Tab>
              <Tab
                className="px-8 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
                selectedClassName="active-tab"
              >
                Tier B
              </Tab>
              <Tab
                className="px-8 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
                selectedClassName="active-tab"
              >
                Tier C
              </Tab>
            </div>
          </TabList>
          <div className="w-full">
            <TabPanel>
              <div className="px-10 flex flex-wrap justify-center gap-8 py-10 relative">
                {tier1Competitions.map((item, index) => (
                  <EventCard
                    key={index}
                    title={item["Event Name"]}
                    time={item["Start Time"] + " - " + item["End Time"]}
                    venue={item["Venue"]}
                    image={`/events/${item["Card Image"]}`}
                    url={`${index}`}
                  />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="px-10 flex flex-wrap justify-center gap-8 py-10 relative">
                {tier2Competitions.map((item, index) => (
                  <EventCard
                    key={index}
                    title={item["Event Name"]}
                    time={item["Start Time"] + " - " + item["End Time"]}
                    venue={item["Venue"]}
                    image={`/events/${item["Card Image"]}`}
                    url={`${index}`}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="px-10 flex flex-wrap justify-center gap-8 py-10 relative">
                {tier3Competitions.map((item, index) => (
                  <EventCard
                    key={index}
                    title={item["Event Name"]}
                    time={item["Start Time"] + " - " + item["End Time"]}
                    venue={item["Venue"]}
                    image={`/events/${item["Card Image"]}`}
                    url={`${index}`}
                  />
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsPageLayout;

EventsPageLayout.propTypes = {
  events: PropTypes.array.isRequired,
};
