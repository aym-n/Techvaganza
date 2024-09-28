import PageLayout from "../../../Components/PageLayout";
import { talks } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function TalksAndWorkshops() {
  return (
    <PageLayout 
      title={"Talks And Workshops"} 
      imgUrl={"/common/worksop-and-talk.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Talks And Workshops", path: "/events/talks-and-workshops" }
      ]}
    >
      <EventsPageLayout events={talks} /> 
    </PageLayout>
  );
}
