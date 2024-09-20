import PageLayout from "../../../Components/PageLayout";
import PropTypes from "prop-types";


export default function PerformingEventsDetailsLayout({data}) {
  return (
    <PageLayout title={data["Event Name"]} imgUrl={`/common/performance.jpeg`}>
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
            <span className="font-bold mr-2">NIT Entry Fee:</span> &#8377; {data["NIT Entry Fee"]}
          </p>
          <p className="text-base mb-2">
           <span className="font-bold mr-2"> Outside Entry Fee:</span> &#8377; {data["Outside Entry Fee"]}
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
      </div>
    </PageLayout>
  );
}

PerformingEventsDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
};