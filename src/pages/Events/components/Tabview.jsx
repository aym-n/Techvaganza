import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PropTypes from "prop-types";
const TabView = ({ data }) => {
  return (
    <>
      <Tabs>
        <TabList className="flex md:gap-5 my-3 font-kodeMono">
          <Tab
            className="px-14 py-3 text-base font-medium text-primary bg-white border-primary focus:outline-none hover:bg-[#e3dbcc] text-center border-2 cursor-pointer"
            selectedClassName="active-tab"
          >
            Rules and prizes
          </Tab>
          <Tab
            className="px-14 py-3 text-base font-medium text-primary bg-white border-primary focus:outline-none hover:bg-[#e3dbcc] text-center border-2 cursor-pointer"
            selectedClassName="active-tab"
          >
            Judging Criteria
          </Tab>
        </TabList>
        <div className="BoxShadow mx-2 my-2 px-3 py-4 pb-12">
          <TabPanel>
            <h1 className="entry-header text-3xl text-primary font-semibold font-neotriad mb-4 mt-4 mx-2 leading-normal">Rules/Prizes</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {data.rules.map((rule) => (
                <p>{rule}</p>
              ))}
            </div>

            <hr className="mt-4 border border-primary" />
            <h1 className="entry-header text-3xl text-primary font-semibold font-neotriad mb-4 mt-4 mx-2 leading-normal">Prizes</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {data.prizes.map((prize) => (
                <p>{prize}</p>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="entry-header text-3xl text-primary font-semibold font-neotriad mb-4 mt-4 mx-2 leading-normal">
              Judging Criteria
            </h2>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {data.judgingCriteria.map((criteria) => (
                <p>{criteria}</p>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default TabView;


TabView.propTypes = { 
  data: PropTypes.object.isRequired,
};