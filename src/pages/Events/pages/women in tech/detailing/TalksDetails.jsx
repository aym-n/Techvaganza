import { useParams } from "react-router-dom";
import TalksDetailsLayout from "./TalksDetailsLayout";
import { talks } from "../../../../../constants/eventDetails-final";
export default function TalksDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= talks.length) {
    return <div>Event not found</div>;
  }

  const event = talks[eventIndex];
  return (
    <>
      <TalksDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}
