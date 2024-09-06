import PageLayout from "../../../Components/PageLayout";
import { gamingEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";

export default function GamingZone(){
    return(
        <PageLayout title={"Gaming Arts"} imgUrl={'/events/gaming-cover.jpg'}>
          <EventsPageLayout events={gamingEvents} /> 
        </PageLayout>
    )
}