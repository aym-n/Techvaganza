import PageLayout from "../../../Components/PageLayout";
import { competitions } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";


export default function Competitions() {
  return (
    <PageLayout title={"Competitions"} imgUrl={"/events/visual-cover.jpg"}>
      <EventsPageLayout events={competitions} />      
    </PageLayout>
  );
}
