import PageLayout from "../../../Components/PageLayout";
import { talks, workshops } from "../../../constants/eventDetails-final";
import EventsPageLayoutWithTabs from "../components/EventsPageLayoutWithTabs";

export default function TalksAndWorkshops() {
  const events = [talks, workshops];
  const tabs = ["Talks", "Workshops"];
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
      <EventsPageLayoutWithTabs events={events} tabs={tabs} /> 
    </PageLayout>
  );
}
