import PageLayout from "../../../Components/PageLayout";
import TabView from "./Tabview";
import PropTypes from "prop-types";


export default function EventDetailsLayout({data}) {
  return (
    <PageLayout title={data["Event Name"]} imgUrl={`/common/conpetition.jpeg`}>
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-4">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
            {data["Event Name"]}
          </p>
          <p className="text-base">{data["Description"]}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Timing</p>
          <p className="text-base mb-2">
            {data["Start Time"]} - {data["End Time"]} , Day {data["Day"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Entry Fee</p>
          <p className="text-base mb-2">
            <span className="font-bold">NIT Entry Fee:</span> {data["NIT Entry Fee"]}
          </p>
          <p className="text-base mb-2">
           <span className="font-bold"> Outside Entry Fee:</span> {data["Outside Entry Fee"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5 font-semibold">
              <li>
                {data["Lead Name"]} ({data["Lead Contact Number"]})
              </li>
          </ul>
        </div>

        {/* Tabs */}
        <div>
          <TabView data={data} />
        </div>
      </div>
    </PageLayout>
  );
}

EventDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
};