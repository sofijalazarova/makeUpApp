import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../public/hero-img.jpg';
import Image2 from '../../public/lips2.jpg';
import Image3 from '../../public/image5.jpg';

const Info = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative w-full h-auto min-h-screen mx-auto flex justify-center items-center bg-white py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12 gap-10 w-full">
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/3">
            <img className="object-contain h-96 lg:h-screen py-5" src={Image1} alt="Eye Makeup" />
          </div>
          <div className="w-full lg:w-1/2 text-left text-black">
            <img className="object-contain py-5 w-full" src={Image2} alt="Eye Makeup Products" />
            <p className="w-full text-center lg:text-left text-[16px] lg:text-xl font-bold">
              Make your eyes the center of attention with our collection of eye makeup. From bold eyeshadows and precise eyeliners to volumizing mascaras and defining brow products, you'll find everything you need to create any look.
            </p>
            <button
              className="py-5 mt-5 px-8 text-2xl outline w-full text-black font-bold shadow-md shadow-primary bg-tertiary hover:bg-primary"
              onClick={() => navigate('/makeUpApp/products')}
            >
              SEE ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full h-auto min-h-screen mx-auto flex justify-center items-center bg-secondary py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12 gap-10 w-full">
          <div className="w-full lg:w-1/2 text-left text-black">
            <p className="w-full text-center lg:text-left text-[16px] font-bold lg:text-xl">
              Indulge in the perfect pout with our extensive range of lip products. Whether you prefer a glossy finish, a matte look, or something in between, we have the perfect shade and texture for you. Our lipsticks, glosses, and liners are formulated to provide rich color, smooth application, and long-lasting wear.
            </p>
            <button className="py-5 mt-5 px-8 text-2xl outline w-full text-black font-bold shadow-md shadow-primary bg-tertiary hover:bg-primary">
              READ MORE
            </button>
          </div>
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/3">
            <img className="object-contain h-96 lg:h-screen py-5" src={Image3} alt="Lip Products" />
          </div>
        </div>
      </section>

      <section className="relative w-full h-auto min-h-screen mx-auto flex justify-center items-center bg-white py-10">
        <div className="flex items-center justify-center px-4 lg:px-12 w-full">
          <div className="text-left text-black my-20 text-4xl lg:text-8xl">
            <h1 className="heroFont">"Every woman deserves a little sparkle."</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
