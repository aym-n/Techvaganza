import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PropTypes from "prop-types";
const TabView = ({ data }) => {
  return (
    <>
      <Tabs>
        <TabList className="flex md:gap-5 my-3">
          <Tab
            className="px-3 md:px-6 py-3 ShadowBlur font-kodeMono text-sm md:text-base rounded-md font-bold text-gray-800 bg-primary border border-primary text-center"
            selectedClassName="active-tab"
          >
            Rules / prizes
          </Tab>
          <Tab
            className="px-3 md:px-6 py-3 ShadowBlur font-kodeMono text-sm md:text-base rounded-md font-bold text-gray-800 bg-primary border border-primary text-center"
            selectedClassName="active-tab"
          >
            Judging Criteria
          </Tab>
        </TabList>
        <div className="BoxShadow mx-2 my-2 px-3 py-4 pb-12">
          <TabPanel>
            <h1 className="entry-header text-3xl font-semibold text-gray-600 font-neotriad textShadow-sm mb-4 mt-4 mx-2 leading-normal">Rules/Prizes</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {data.rules.map((rule) => (
                <p>{rule}</p>
              ))}
            </div>

            <hr className="mt-4 border border-primary" />
            <h1 className="entry-header text-3xl tfont-semibold text-gray-600 font-neotriad textShadow-sm mb-4 mt-4 mx-2 leading-normal">Prizes</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {data.prizes.map((prize) => (
                <p>{prize}</p>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="entry-header text-3xl font-semibold text-gray-600 font-neotriad textShadow-sm mb-4 mt-4 mx-2 leading-normal">
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