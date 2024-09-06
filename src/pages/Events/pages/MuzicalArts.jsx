import PageLayout from "../../../Components/PageLayout";
import { MuzicalEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";

export default function MuzicalArts(){
    return(
        <PageLayout title={"Muzical Arts"} imgUrl={'/events/musical-cover.jpg'}>
          <EventsPageLayout events={MuzicalEvents} /> 
        </PageLayout>
    )
}