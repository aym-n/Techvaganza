import PageLayout from "../../../Components/PageLayout";
import { OtherEvents } from "../../../constants/events";
import { talks } from "../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../components/WomenInTechPageLayout";
export default function WomenInTech(){
  const womenTalkEvents = talks
  .map((talk, index) => ({ ...talk, originalIndex: index }))
  .filter(talk => talk.isWomen === true);
    return(
        <PageLayout title={"Women In Tech"} imgUrl={'/BattleOfBands.png'}>
          <WomenInTechPageLayout talks={womenTalkEvents} competitions={OtherEvents} /> 
        </PageLayout>
    )
}