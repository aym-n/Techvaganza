import { useState, useEffect, useRef,useCallback } from "react";
import Header from "../../../Components/Header";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAddressCard } from "react-icons/fa6";

function Hero() {
  const targetDate = "2024-10-10T09:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

// scrambling text animation 
  const [scrambledText, setScrambledText] = useState("Techvaganza");
  const textRef = useRef(null);
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const originalText = "Techvaganza";

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText(prev => 
        prev.split("").map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);
  }, []);

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 10000);
    return () => clearInterval(intervalId);
  }, [scrambleText]);

  // Animate on scroll initialization
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
    <div
      className="bg-cover bg-center  min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #000000 0%, #0000009f 50%, #00000033 100%), url(/common/hero-cover-2.jpg)",
      }}
    >
      <div>
        <Header />
      </div>
      <div className="pt-4 md:pt-32 p-7 md:p-32">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="text-white text-xl ss:text-2xl md:text-4xl text-center overflow-visible xs:whitespace-nowrap"
        >
          10
          <sup className="text-white text-xl md:text-2xl">th </sup>& 11
          <sup className="text-white text-xl md:text-2xl">th </sup>
          Oct 2024
        </div>
        <p 
          ref={textRef}
          className="text-center text-5xl ss:text-7xl sm:text-8xl md:text-9xl mt-4 text-white font-neotriad font-extrabold overflow-visible textShadow"
        >
          {scrambledText}
        </p>

        <p 
          className="text-center text-2xl ss:text-3xl sm:text-4xl  mt-4 text-white font-kodeMono font-bold overflow-visible textShadow-sm"
        >
          Greener Innovations: Engineering a Sustainable World
        </p>

        <div className="font-kodeMono mt-6 md:mt-10 flex justify-center">
          <div className="w-full min-w-150 mt-7 px-12 lg:px-40 flex flex-wrap gap-6 justify-between text-white font-bold overflow-hidden">
            <div data-aos="fade-down" className="text-center overflow-visible">
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.days}
              </div>
              <div className=" block text-lg md:text-3xl overflow-visible textShadow-sm">
                DAYS
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-center overflow-visible"
            >
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.hours}
              </div>
              <div className="block text-lg md:text-3xl overflow-visible textShadow-sm">
                HOURS
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-center overflow-visible"
            >
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.minutes}
              </div>
              <div className=" block text-lg md:text-3xl overflow-visible textShadow-sm">
                MINUTES
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-center overflow-visible"
            >
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.seconds}
              </div>
              <div className=" block text-lg md:text-3xl overflow-visible textShadow-sm">
                SECONDS
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-8 md:gap-7 my-10 md:mt-8">
          <p className="flex gap-4 items-center text-white textShadow-md md:textShadow font-figtree text-md md:text-3xl mt-5 ">[ Event Registrations Opening Soon ]</p>
          {/* <div className="flex gap-4 items-center text-secondary">
            <FaAddressCard size={24} />
            <Link
              data-aos="fade-in"
              data-aos-delay="500"
              to={'/register'}
              className=""
            >
              [ Register Yourself ]
            </Link>
          </div> */}
          {/* <Link
            data-aos="fade-in"
            data-aos-delay="500"
            className="rounded-full bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono custom-glow"
          >
            Attendee Registration
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
