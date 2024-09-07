import PageLayout from "../../../Components/PageLayout";
import { events } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function AllEvents() {
  return (
    <PageLayout title={"Events"} imgUrl={"/events/events.jpg"}>
      <EventsPageLayout events={events} /> 
    </PageLayout>
  );
}
