import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const ResourceDropdownMenu = ({ isDropdownOpen, position }) => {
  const { top, bottom, left, right } = position || {}; // Destructure position props
  return createPortal(
    <div
      className={`absolute ${right ? "right-0" : left ? "left-0" : ""} ${
        bottom ? "bottom-0" : top ? "top-0" : ""
      } w-48 bg-white backdrop-blur-lg font-kodeMono rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
        isDropdownOpen
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-2 pointer-events-none"
      }`}
      style={{
        top: top || undefined,
        bottom: bottom || undefined,
        left: left || undefined,
        right: right || undefined,
        zIndex: 9999,
        background: "rgba(225, 225, 225, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)", // Custom border with 20% opacity
      }}
    >
      <Link
        to="/schedule"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Schedule
      </Link>
      <Link
        to="/bronche"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Bronche
      </Link>
    </div>,
    document.getElementById("dropdown-root")
  );
};

export default ResourceDropdownMenu;
