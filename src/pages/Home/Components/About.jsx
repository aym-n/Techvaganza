import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function About() {
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
    <div className='px-4 sm:px-0 flex justify-center items-center'>
      <div data-aos="fade-down" className='p-8 my-40 bg-background sm:p-12 md:w-3/5 sm:w-4/5  ShadowLarge'>
        <div className='overflow-visible mb-5'>
          <p className='text-xs sm:text-sm font-semibold'>
            NIT Srinagar's Annual Technical Fest
          </p>
          <h2 className='text-gray-700 textShadow-md text-4xl sm:text-5xl md:text-6xl overflow-visible font-semibold font-figtree mt-2'>
            Techvaganza
          </h2>
        </div>
        <div>
          <p className='text-base sm:text-base md:text-base'>
          Techvaganza, the Annual Technical Fest at the National Institute of Technology, Srinagar, is an electrifying celebration of innovation that transforms our campus into a buzzing hub of technological excitement. This year's theme, "Greener Innovations: Engineering a Sustainable World," infuses every aspect of the fest with an eco-conscious spirit. The heart of Techvaganza beats with intense hackathons, where teams race against the clock to develop sustainable solutions for real-world problems. The startup pitch competition gives budding entrepreneurs a platform to showcase their green business ideas, with potential investors in the audience. Throughout the event, a wide array of competitions challenges participants' technical skills and creativity, from coding marathons to robotics face-offs, all with an environmental twist. The highlight of Techvaganza is undoubtedly the breathtaking drone show, painting the night sky with dazzling formations that tell the story of a greener tomorrow. With its perfect blend of competition, innovation, and spectacle, Techvaganza at NIT Srinagar isn't just a fest – it's a glimpse into a more sustainable future, powered by the bright minds of tomorrow's tech leaders.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
