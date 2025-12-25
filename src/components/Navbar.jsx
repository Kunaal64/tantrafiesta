import { Link } from "react-router-dom";
import { TbSquareRotatedFilled } from "react-icons/tb";

/**
 * Navbar Component
 * 
 * Renders the top navigation bar.
 * Contains links to various sections (About, Events, Workshops, Speakers, Team, Contact).
 * Uses React Icons for decorative elements.
 * 
 * Structure:
 * - Fluid width, fixed position at top.
 * - Backdrop blur effect.
 * - Flexbox layout for responsiveness (hidden on mobile, visible on lg screens).
 */
const Navbar = () => {
  return (
    <nav className=" w-screen absolute z-50 backdrop-blur-sm">
      <div className="navbar  text-white w-[80vw] h-24 flex justify-around m-auto items-center ">
        <Link
          to="/#about"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          ABOUT
        </Link>
        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />
        <Link
          to="/events"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          EVENTS
        </Link>

        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />

        <Link
          to="/#workshops"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          WORKSHOPS
        </Link>

        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />
        <Link to="/">
          <img src="/assets/logo/logo_nav.png" height={350} width={350} alt="Logo" />
        </Link>
        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />

        <Link
          to="/#speakers"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          SPEAKERS
        </Link>

        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />

        <Link
          to="/team"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          TEAM
        </Link>
        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />
        <Link
          to="/#contact"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


