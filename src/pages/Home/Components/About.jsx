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
          <h2 className='text-secondary text-4xl sm:text-5xl md:text-6xl overflow-visible font-semibold font-neotriad mt-2'>
            Techvaganza
          </h2>
        </div>
        <div>
          <p className='text-base sm:text-base md:text-base'>
            The Annual Cultural Fest at the National Institute of Technology,
            Srinagar, aptly named "Rang-e-Chinar," is a dazzling spectacle of
            talent and creativity that leaves no stone unturned in showcasing
            the vibrant spirit of our institution. "Rang-e-Chinar" is an
            unparalleled celebration of the performing arts. The art
            exhibitions and installations demonstrate the depth of creativity
            among our students. Furthermore, the fest fosters a spirit of
            inclusivity by hosting engaging workshops, thought-provoking
            discussions, and even culinary experiences that reflect the
            diversity of our nation. "Rang-e-Chinar" at NIT Srinagar is an
            unmatched blend of art, culture, and innovation, making it an event
            that leaves a lasting mark on the hearts and minds of all who
            attend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
