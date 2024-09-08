import PageLayout from "../../../Components/PageLayout";
import { competitions } from "../../../constants/eventDetails-final";
import { talks } from "../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../components/WomenInTechPageLayout";
export default function WomenInTech(){
  const womenTalkEvents = talks
  .map((talk, index) => ({ ...talk, originalIndex: index }))
  .filter(talk => talk.isWomen === true);

  const womenCompetitions = competitions
    .map((competition, index) => ({ ...competition, originalIndex: index }))
    .filter(competition => competition.isWomen === true);
    return(
        <PageLayout title={"Women In Tech (Only Women Participants Allowed)"} imgUrl={'/BattleOfBands.png'}>
          <WomenInTechPageLayout talks={womenTalkEvents} competitions={womenCompetitions} /> 
        </PageLayout>
    )
}