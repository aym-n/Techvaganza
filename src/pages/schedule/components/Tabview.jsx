import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ScheduleItem from "./ScheduleItem";
import { day1Events, day2Events } from "../../../constants/events";


const Tabview = ({ tab1, tab2 }) => {
  return (
    <Tabs>
      <TabList className={"flex mx-1 md:gap-2 my-2 py-4 font-kodeMono"}>
        <Tab
          className={
            "px-14 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
          }
          selectedClassName="active-tab"
        >
          {tab1}
        </Tab>
        <Tab
          selectedClassName="active-tab"
          className={
            "px-14 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
          }
          
        >
          {tab2}
        </Tab>
      </TabList> 
      <div className="BoxShadow mx-1 my-1 px-3 py-4 pb-12">
        <TabPanel>
          {day1Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item.title}
              startTime={item.startTime}
              endTime={item.endTime}
              venue={item.venue}
              exploreUrl={item.exploreUrl}
              fullDay = {item.fullDay}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {day2Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item.title}
              startTime={item.startTime}
              endTime={item.endTime}
              venue={item.venue}
              exploreUrl={item.exploreUrl}
            />
          ))}
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Tabview;
