import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default function EventCard({title, time, venue, url, image}) {
  return (
    <>
      <Link to={url} className="rounded-xl bg-white flex flex-col items-center BoxShadow w-[250px] md:w-[310px] px-4 py-4 mb-6">
          <img
            className="w-[220px] h-[300px] md:w-[280px] md:h-[360px] overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
            src="/events/meme.jpg"
            alt=""
          />
        <div className="mt-[280px] md:mt-[340px] w-full">
          <p className="font-semibold font-neotriad text-2xl text-primary">
            {title}
          </p>
          <p className="text-sm md:text-base text-gray-900 font-semibold font-kodeMono">{time}</p>
          <p className="text-base text-gray-600 mt-3 font-kodeMono">{venue}</p>
        </div>
      </Link>
    </>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};