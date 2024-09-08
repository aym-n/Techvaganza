import TalksAndWorkshopDetailsLayout from "../../components/TalksAndWorkshopDetailsLayout";
import { useParams } from "react-router-dom";
import {talksAndWorkshops} from "../../../../constants/eventDetails-final";
export default function TalksAndWorkshopsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= talksAndWorkshops.length) {
    return <div>Event not found</div>;
  }

  const event = talksAndWorkshops[eventIndex];
  return (
    <>
      <TalksAndWorkshopDetailsLayout
        data={event}
      />
    </>
  );
}
