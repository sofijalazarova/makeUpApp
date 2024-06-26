import React, { useEffect, useState } from 'react';

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
      scrolled ? "bg-white" : "bg-white"
    }`}
  >
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:max-w-7xl lg:mx-auto">
                    <div className="text-black text-[25px] font-bold cursor-pointer flex drugFont pl-5 mb-4 lg:mb-0 hover:cursor-pointer">Maybellline</div>
              
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
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
      
                    <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl lg:gap-56`}>
                        <a href="/" className="text-black  px-4 py-2 hover:text-orange-600 ">Home</a>
                        <a href="/products" className="text-black  px-4 py-2  hover:text-orange-600">Products</a>                      
                        <a href="/contact" className="text-black  px-4 py-2  hover:text-orange-600">Contact</a>
                    </div>
                </div>                
            </nav>
  );
};

export default Navbar;
