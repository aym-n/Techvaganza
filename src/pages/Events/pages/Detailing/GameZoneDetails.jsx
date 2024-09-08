import EventDetailsLayout from "../../components/EventDatailsLayout";
import GamingEventDetailsLayout from "../../components/GamingEventDetailsLayout";
import { useParams } from "react-router-dom";
import {gamingEvents} from "../../../../constants/eventDetails-final";
export default function GameZoneDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= gamingEvents.length) {
    return <div>Event not found</div>;
  }

  const event = gamingEvents[eventIndex];
  return (
    <>
      <GamingEventDetailsLayout
        data={event}
      />
    </>
  );
}
