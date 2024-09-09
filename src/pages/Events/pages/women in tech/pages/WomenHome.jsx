import PageLayout from "../../../../../Components/PageLayout";
import CategoryCard from "../../../components/CategoryCard";
const womenCategory = [
    {
        id: 1,
        title: "Women Competitions",
        url: "competitions",
        img: "/events/other.jpg",
      },
      {
        id: 2,
        title: "Women Talks and Workshops",
        url: "talks-and-workshops",
        img: "/events/other.jpg",
      },
]

export default function WomenHome(){
    return(
        <PageLayout title={"Women In Tech*"} imgUrl={'/BattleOfBands.png'}>
          <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
            {womenCategory.map((item, index) => (
                <CategoryCard key={item.id} index={index} title={item.title} url={item.url} img={item.img} />
                ))}
                
            </div>
        </PageLayout>
    )
}