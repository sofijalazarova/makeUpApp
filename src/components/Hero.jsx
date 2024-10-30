import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section
        className={`relative w-full h-screen pt-20 mx-auto content-center justify-items-center  bg-bgcolor`}
      >
        <div className=" lg:mx-28  lg:h-[500px] flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full h-full px-4 py-5 text-secondary lg:w-2/3 lg:px-0">
            <h1 className="pt-5 text-5xl text-center text-headingColor heroFont lg:text-9xl">
              Unleash your inner artist
            </h1>
            <h1 className="text-4xl text-center drugFont text-headingColor lg:text-8xl">
              Maybelline
            </h1>
            <h1 className="text-2xl text-center heroFont text-headingColor lg:text-5xl">
              Discover the latest in beauty innovation
            </h1>
            <div className="flex justify-center">
              <Link to="products">
                <Button>SEE ALL PRODUCTS</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/3 lg:justify-end">
            <img
              src="https://i.pinimg.com/564x/14/a7/c0/14a7c0f9ddb3dfdaa2562921bd5cadef.jpg"
              className="object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
