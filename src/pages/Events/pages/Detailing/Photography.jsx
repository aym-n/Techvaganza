import { photographyData } from "../../../../constants/eventDetails";
import EventDetailsLayout from "../../components/EventDatailsLayout";


export default function Photography() {
  return (
    <>
      <EventDetailsLayout
        data={photographyData}
      />
    </>
  );
}
