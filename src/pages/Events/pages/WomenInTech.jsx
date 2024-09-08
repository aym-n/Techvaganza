import PageLayout from "../../../Components/PageLayout";
import { OtherEvents } from "../../../constants/events";
import WomenInTechPageLayout from "../components/WomenInTechPageLayout";
export default function WomenInTech(){
    return(
        <PageLayout title={"Women In Tech"} imgUrl={'/BattleOfBands.png'}>
          <WomenInTechPageLayout events={OtherEvents} /> 
        </PageLayout>
    )
}