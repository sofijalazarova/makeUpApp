import React from 'react';
import Image from '../../public/lipstick-hero.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();
  return (
    <section className={`relative w-full h-screen mx-auto content-center justify-items-center pt-40 lg:pt-24 bg-image`} >  
      <div className='bg-white lg:mx-28 h-full lg:h-[500px] flex flex-col lg:flex-row items-center justify-center'>
        <div className='bg-white w-full lg:w-2/3 h-full py-5 px-4 lg:px-0'>
            <h1 className='heroFont text-5xl lg:text-9xl pt-5 text-center'>Unleash your inner artist</h1>
            <h1 className='drugFont text-4xl lg:text-8xl text-center'>Maybelline</h1>
            <h1 className='heroFont text-2xl lg:text-5xl text-center'>Discover the latest in beauty innovation</h1>
            <div class="flex justify-center">
              <button onClick={() => {navigate('/makeUpApp/heroProduct')}} className='w-full lg:w-1/2 py-5 my-5 px-8 text-2xl text-white font-bold shadow-md shadow-primary outline bg-black'>SEE PRODUCT</button>
            </div>
        </div>
        <div className='w-full lg:w-1/3 flex justify-center lg:justify-end'>
            <img src={Image} className='w-full h-auto lg:h-full object-cover'/>
        </div>
      </div>   
    </section>
  )
}

export default Hero;