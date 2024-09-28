import PageLayout from "../../../Components/PageLayout";
import { competitions } from "../../../constants/eventDetails-final";
import EventsPageLayoutWithTabs from "../components/EventsPageLayoutWithTabs";

const tier1Fee = "149";
const tier2Fee = "99";
const tier3Fee = "49";


export default function Competitions() {
  const tier1Competitions = competitions.filter(
    (event) => event["Outside Entry Fee"] === tier1Fee
  );
  const tier2Competitions = competitions.filter(
    (event) => event["Outside Entry Fee"] === tier2Fee
  );
  const tier3Competitions = competitions.filter(
    (event) => event["Outside Entry Fee"] === tier3Fee
  );
  const events = [tier1Competitions, tier2Competitions, tier3Competitions];
  const tabs = ["Tier A", "Tier B", "Tier C"];
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
      <EventsPageLayoutWithTabs events={events} tabs={tabs} />      
    </PageLayout>
  );
}
