import PageLayout from "../../../Components/PageLayout";
import { talks } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function TalksAndWorkshops() {
  return (
    <PageLayout title={"Talks And Workshops"} imgUrl={"/events/performing-cover.jpg"}>
      <EventsPageLayout events={talks} /> 
    </PageLayout>
  );
}
