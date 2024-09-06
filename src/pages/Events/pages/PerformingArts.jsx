import PageLayout from "../../../Components/PageLayout";
import { PerformingEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";

export default function PerformingArts() {
  return (
    <PageLayout title={"Performing Arts"} imgUrl={"/events/performing-cover.jpg"}>
      <EventsPageLayout events={PerformingEvents} /> 
    </PageLayout>
  );
}
