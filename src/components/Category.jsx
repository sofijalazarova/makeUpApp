import React from 'react';
import Blushes from '../../public/blushes.jpg';
import Concealer from '../../public/concealer.jpg';
import Eyeshadow from '../../public/eyeshadows.jpg';

const CategoryCart = ( props ) => {

    return(
    <div>
      <div className='p-3 rounded-xl sm:w-[360px] w-full rounded-md shadow-lg'>
        <div className='relative w-full h-[270px]'>
          <img
            src={props.imagePath}
            alt='project_image'
            className='w-[360px] h-full object-cover rounded-lg'
          />
        </div>
        <div className='pt-5'>
          <h3 className='text-black font-bold text-[24px] text-center'>{props.name}</h3>
        </div>        
      </div>
    </div>
    )
}

const Category = () => {
  return (  
    <>
        <section className='relative w-full h-auto min-h-screen mx-auto flex justify-center items-center bg-secondary pt-20 pb-10'>
            <div className='flex flex-wrap gap-7 justify-center'>
                <CategoryCart imagePath={Blushes} name="Blushes"/>
                <CategoryCart imagePath={Eyeshadow} name="Eyeshadows"/>
                <CategoryCart imagePath={Concealer} name="Concealers"/>
            </div>
        </section>   
    </>
  )
}

export default Category;