import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const WomenInTechPageLayout = ({ events }) => {
  return (
    <div className="bg-background ShadowLarge">
      <div className="font-playfair px-8 pt-8 ">
        <p className="text-base text-black text-opacity-80 font-kodeMono">
          Explore
        </p>
        <p className="text-primary font-extrabold font-figtree text-5xl leading-normal">
          Event List
        </p>
      </div>
      <Tabs>
        <TabList className="flex md:gap-5 my-3">
          <Tab
            className="px-8 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
            selectedClassName="active-tab"
          >
            Talks And Workshops
          </Tab>
          <Tab
            className="px-8 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
            selectedClassName="active-tab"
          >
            Competitions
          </Tab>
        </TabList>
        <div className="BoxShadow mx-2 my-2 px-3 py-4 pb-12">
          <TabPanel>
            <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
              {events.map((item, index) => (
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
            <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
              {events.map((item, index) => (
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
  );
};

export default WomenInTechPageLayout;

// WomenInTechPageLayout.propTypes = {
//   events: PropTypes.array.isRequired,
// };
