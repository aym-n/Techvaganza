import PageLayout from "../../../Components/PageLayout";
import TabView from "./Tabview";
import PropTypes from "prop-types";


export default function EventDetailsLayout({data}) {
  return (
    <PageLayout title={data.title} imgUrl={data.imgUrl}>
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-4">
          <p className="font-semibold font-neotriad textShadow text-5xl text-gray-800 leading-normal mb-3">
            {data.title}
          </p>
          <p className="text-base">{data.desc}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-neotriad textShadow-sm text-3xl leading-normal mb-4">Timing</p>
          <p className="text-base mb-2">
            {data.startTime} - {data.endTime} , Day {data.day}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-neotriad textShadow-sm text-3xl leading-normal mb-4">Entry Fee</p>
          <p className="text-base mb-2">
            {Object.keys(data.entryFee).map((key) => (
              <div className="mb-3">
                <span className="font-medium">{key}:</span>
                {Object.keys(data.entryFee[key]).map((key2) => (
                  <p className="pl-5">
                    <span className="font-medium">{key2}</span> :{" "}
                    {data.entryFee[key][key2]}
                  </p>
                ))}
              </div>
            ))}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5 font-semibold">
            {data.contact.map((contact) => (
              <li>
                {contact.name} ({contact.phone})
              </li>
            ))}
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