import { useNavigate } from "react-router-dom";
import Image1 from "../../public/hero-img.jpg";
import Image2 from "../../public/eye.png";
import Image3 from "../../public/image5.jpg";
import Button from "./Button";

const Info = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative flex items-center justify-center w-full h-auto min-h-screen py-10 mx-auto bg-bgcolor">
        <div className="flex flex-col items-center justify-center w-full gap-10 px-4 lg:flex-row lg:px-12">
          <div className="flex items-center justify-center w-full lg:justify-end lg:w-1/3">
            <img
              className="object-contain py-5 h-96 lg:h-screen"
              src={Image1}
              alt="Eye Makeup"
            />
          </div>
          <div className="flex flex-col items-center text-black lg:w-1/2">
            <img
              className="object-contain w-1/2 py-5 border-x-8"
              src={Image2}
              alt="Eye Makeup Products"
            />
            <p className="w-full text-center text-[20px] font-bold">
              Make your eyes the center of attention with our collection of eye
              makeup. From bold eyeshadows and precise eyeliners to volumizing
              mascaras and defining brow products, you&apos;ll find everything
              you need to create any look.
            </p>
            <Button onClick={() => navigate("/makeUpApp/products")}>
              SEE ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center w-full h-auto min-h-screen py-10 mx-auto bg-sectioncolor">
        <div className="flex flex-col items-center justify-center w-full gap-10 px-4 lg:flex-row lg:px-12">
          <div className="flex flex-col items-center w-full text-black lg:w-1/2">
            <p className="w-full text-center text-[20px] font-bold  pb-10">
              Indulge in the perfect pout with our extensive range of lip
              products. Whether you prefer a glossy finish, a matte look, or
              something in between, we have the perfect shade and texture for
              you. Our lipsticks, glosses, and liners are formulated to provide
              rich color, smooth application, and long-lasting wear.
            </p>

            <Button>READ MORE</Button>
          </div>
          <div className="flex items-center justify-center w-full lg:justify-end lg:w-1/3">
            <img
              className="object-contain py-5 h-96 lg:h-screen"
              src={Image3}
              alt="Lip Products"
            />
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center w-full h-auto min-h-screen py-10 mx-auto bg-bgcolor">
        <div className="flex items-center justify-center w-full px-4 lg:px-12">
          <div className="my-20 text-4xl text-center text-black lg:text-8xl">
            <h1 className="heroFont">
              &quot;Every woman deserves a little sparkle.&quot;
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
