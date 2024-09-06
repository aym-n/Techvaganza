import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const StickySocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 z-50">
      <ul className="flex flex-col space-y-2 bg-primary">
        
        {/* Instagram Link */}
        <li className="relative">
          <a
            href="https://www.instagram.com/techvaganza.nitsri/"
            target="_blank"
            className="flex items-center justify-center w-12 h-12 hover:w-20 text-black hover:bg-background hover:text-primary transform  transition-all duration-500 ease-in-out"
          >
            <IoLogoInstagram size={24} />
          </a>
        </li>

        {/* LinkedIn Link */}
        <li className="relative">
          <a
            href="https://in.linkedin.com/company/techvaganza-nit-srinagar"
            target="_blank"
            className="flex items-center justify-center w-12 h-12 hover:w-20 text-black hover:bg-background hover:text-primary transition-all duration-500 ease-in-out"
          >
            <FaLinkedinIn size={24} />
          </a>
        </li>

        {/* YouTube Link */}
        <li className="relative">
          <a
            href="https://www.youtube.com/@NITSrinagarofficial"
            target="_blank"
            className="flex items-center justify-center w-12 h-12 hover:w-20 text-black hover:bg-background hover:text-primary transition-all duration-500 ease-in-out"
          >
            <FaYoutube size={24} />
          </a>
        </li>

      </ul>
    </div>
  );};

export default StickySocialSidebar;
