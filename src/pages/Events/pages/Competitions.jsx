import PageLayout from "../../../Components/PageLayout";
import { VisualEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";


export default function Competitions() {
  return (
    <PageLayout title={"Competitions"} imgUrl={"/events/visual-cover.jpg"}>
      <EventsPageLayout events={VisualEvents} />      
    </PageLayout>
  );
}
