import PageLayout from "../../../Components/PageLayout";
import { competitions } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";


export default function Competitions() {
  return (
    <PageLayout 
      title={"Competitions"} 
      imgUrl={"/common/conpetition.jpeg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        {label: "Competitions", path: "/events/competitions"}
      ]}
    >
      <EventsPageLayout events={competitions} />      
    </PageLayout>
  );
}
