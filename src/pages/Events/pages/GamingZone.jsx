import PageLayout from "../../../Components/PageLayout";
import { gamingEvents } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function GamingZone(){
    return(
        <PageLayout title={"Gaming Arts"} imgUrl={'/events/gaming-cover.jpg'}>
          <EventsPageLayout events={gamingEvents} /> 
        </PageLayout>
    )
}