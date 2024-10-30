import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-pink ${
        scrolled ? "bg-primary" : "bg-primary"
      }`}
    >
      <div className="container flex flex-col items-center mx-auto justify-stretch lg:flex-row lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center">
          <Link to="">
            <div className="text-black text-[25px] font-bold cursor-pointer flex drugFont pl-5 pr-32 mb-4 lg:mb-0 hover:cursor-pointer">
              Maybellline
            </div>
          </Link>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="primary"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:flex flex-col lg:flex-row ${
            isOpen ? "block" : "hidden"
          } lg:space-x-0 lg:mt-0 mt-4 flex flex-col items-center text-xl lg:gap-14 `}
        >
          <Link
            to="/makeUpApp/"
            className="px-4 py-2 text-black hover:text-white "
          >
            Home
          </Link>
          <Link
            to="/makeUpApp/products"
            className="px-4 py-2 text-black hover:text-white"
          >
            Products
          </Link>
          <Link
            to="/makeUpApp/"
            className="px-4 py-2 text-black hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
