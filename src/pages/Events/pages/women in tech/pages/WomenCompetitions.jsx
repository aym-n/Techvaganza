import PageLayout from "../../../../../Components/PageLayout";
import { competitions } from "../../../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../../../components/WomenInTechPageLayout";
export default function WomenCompetitions(){
  const womenCompetitions = competitions
    .map((competition, index) => ({ ...competition, category: "competitions", originalIndex: index }))
    .filter(competition => competition.isWomen === true);
    return(
        <PageLayout title={"Women Competitions"} imgUrl={'/BattleOfBands.png'}>
          <WomenInTechPageLayout events={womenCompetitions} /> 
        </PageLayout>
    )
}