import PageLayout from "../../../../../Components/PageLayout";
import { talks } from "../../../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../../../components/WomenInTechPageLayout";
export default function WomenTalks(){
  const womenTalkEvents = talks
  .map((talk, index) => ({ ...talk,category: "talks-and-workshops", originalIndex: index }))
  .filter(talk => talk.isWomen === true);

    return(
        <PageLayout title={"Women Talks and Workshops"} imgUrl={'/BattleOfBands.png'}>
          <WomenInTechPageLayout events={womenTalkEvents} /> 
        </PageLayout>
    )
}