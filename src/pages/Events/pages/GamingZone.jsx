import PageLayout from "../../../Components/PageLayout";
import { gamezone } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function GamingZone(){
  console.log(gamezone)
    return(
        <PageLayout title={"Gaming Arts"} imgUrl={'/events/gaming-cover.jpg'}>
          <EventsPageLayout events={gamezone} /> 
        </PageLayout>
    )
}