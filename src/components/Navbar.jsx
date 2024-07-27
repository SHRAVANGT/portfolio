import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex    items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
          <img
            className="mx-2 w-20
          transition transform hover:scale-150 duration-300
          hover:animate-blink"
            src={logo}
            alt="logo"
          />
        </div>
        <div
          className="m-8 flex item-center justify-center gap-4 text-2xl                transition transform hover:scale-110 duration-300
"
        >
          <div
            className=" transition transform hover:scale-150 duration-300
          hover:animate-blink
          "
          >
            <a
              href="https://www.linkedin.com/in/shravan-g-t-a07g7t"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div
            className=" transition transform hover:scale-150 duration-300
          hover:animate-blink
          "
          >
            <a
              href="https://www.github.com/shravangt"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div
            className=" transition transform hover:scale-150 duration-300
          hover:animate-blink
          "
          >
            <a
              href="https://www.instagram.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
