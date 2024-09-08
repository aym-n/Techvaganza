import PageLayout from "../../../Components/PageLayout";
import { OtherEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";
export default function WomenInTech(){
    return(
        <PageLayout title={"Women In Tech"} imgUrl={'/BattleOfBands.png'}>
          <EventsPageLayout events={OtherEvents} /> 
        </PageLayout>
    )
}