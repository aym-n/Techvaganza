import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import PropTypes from "prop-types";


const CategoryCard = ({ img, title, url, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "Phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);
  return (
    <div data-aos="fade-down" data-aos-delay={index*100} className="mb-5 CardShadow">
      <img className="h-[450px] w-96 md:w-80 overflow-hidden" src={img} alt={title + " image"} />
      <div className="p-4 bg-background">
        <p className="text-3xl text-primary bg-opacity-70 font-semibold font-neotriad overflow-visible">{title}</p>
        <Link to={url}>
          <button className="mt-2 ShadowBlur text-primary font-kodeMono border-primary border py-2 px-3 rounded-lg">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};