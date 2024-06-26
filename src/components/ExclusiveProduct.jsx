import React from 'react';
import Image1 from '../../public/image15.jpg';
import Image2 from '../../public/image23.jpg';
import Image3 from '../../public/image24.jpg';
import Image4 from '../../public/image14.jpg';
import Image5 from '../../public/lipstick-hero.png'

const ExclusiveProduct = () => {
  return (

    <>
    <div className='bg-secondary'>
        <div className='flex flex-col lg:flex-row pt-28 pb-5 lg:pb-20 bg-secondary justify-center items-center lg:space-x-8'>
            <div className='w-full lg:w-1/2 flex justify-center pt-5'>
                <img src={Image5}/>
            </div>
            <div className='p-5 w-full lg:w-1/2'>
                <h1 className='heroFont text-3xl lg:text-5xl pt-5 text-start pb-3'>Maybelline SuperStay Matte Ink Liquid Lipstick</h1>               
                <ul className='space-y-5 text-left pt-5'>
                    <li>
                        <b><i>Long-Lasting Wear: </i></b>Enjoy up to 16 hours of wear without the need for touch-ups.
                    </li>
                    <li>
                        <b><i>Intense Pigmentation: </i></b>Highly pigmented formula ensures bold and vibrant color.
                    </li>
                    <li>
                        <b><i>Smooth Application: </i></b>Arrow applicator allows for precise and easy application.
                    </li>               
                </ul>
                <p className='pt-3'><b><i>Ingredients: </i></b>Isododecane, Dimethicone, Trimethylsiloxysilicate, Synthetic Fluorphlogopite, Disteardimonium Hectorite, and more.</p>
                <h1 className="text-4xl lg:text-6xl text-start mt-3">$10</h1>      
                <div className="flex justify-start">
                    <button className="w-full lg:w-1/2 py-3 lg:py-5 my-5 px-8 text-lg lg:text-2xl text-white font-bold shadow-md shadow-primary outline bg-black">
                        Buy product
                    </button>
                </div>
            </div>
        </div>
        <div className='px-8 lg:px-32 py-8 lg:py-20'>
            <p className='text-[16px] font-bold lg:text-[20px] text-center'>Unleash your inner artist with Maybelline SuperStay Matte Ink Liquid Lipstick. This high-impact, long-wearing liquid lipstick delivers a flawless, matte finish that lasts up to 16 hours. Featuring a unique arrow applicator for precise application, SuperStay Matte Ink glides on smoothly, leaving your lips with a bold, vibrant color that stays put without fading or smudging. </p>
        </div>
    </div>
        <div className='bg-red-900 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-0 py-5'>
            <div className='flex flex-col items-center'>
                <img src={Image1}/>
                <img src={Image4}/>
            </div>       
            <img src={Image2}/>
            <img className='lg:pl-10' src={Image3}/>
        </div>
    </>
  )
}

export default ExclusiveProduct;

