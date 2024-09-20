import PageLayout from "../../../Components/PageLayout";
import PropTypes from "prop-types";


export default function TalksAndWorkshopDetailsLayout({data}) {
    // const rules = data["Rules"].split(";").map(rule => rule.trim()).filter(rule => rule !== "");
  return (
    <PageLayout title={data["Event Name"]} imgUrl={"/common/worksop-and-talk.png"}>
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

        <div className="BoxShadow mx-2 my-2 px-3 py-2 pb-12">
        <h1 className="entry-header text-3xl font-semibold text-gray-600 font-figtree textShadow-sm mb-4 mt-4 mx-2 overflow-visible">About The Speakers</h1>
            {/* <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {rules.map((rule, index) => (
                <p key={index}>{rule}</p>
              ))}
            </div> */}
        </div>
      </div>
    </PageLayout>
  );
}

TalksAndWorkshopDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
};