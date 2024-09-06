import PageLayout from "../../../Components/PageLayout";
import { OtherEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";
export default function Others(){
    return(
        <PageLayout title={"Others"} imgUrl={'/BattleOfBands.png'}>
          <EventsPageLayout events={OtherEvents} /> 
        </PageLayout>
    )
}