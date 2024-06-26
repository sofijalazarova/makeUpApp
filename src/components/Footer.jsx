import React from 'react';
import Image from '../../public/other.jpg'

const Footer = () => {
  return (
    // <section className={`relative w-full h-screen mx-auto content-center justify-items-center pt-20 bg-image`} >

    //   <div className='bg-fourth h-[500px] w-full flex items-center'>
    //     <div className='w-1/3 h-full'>         
    //         <h1 className='drugFont text-2xl text-center pt-10'>Maybelline</h1>           
    //     </div>
    //     <div className='w-1/3 flex justify-center items-center'>           
    //         <img className='h-[500px] object-contain px-5' src={Image}/>            
    //     </div>
    //     <div className='w-1/3 h-full content-center items-center justify-items-center'>
            
    //         <h1 className='text-xl text-center'></h1>           
    //     </div>
    //   </div>     
    // </section>
    
  
    <footer
      class="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div class="container p-6">
        <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div class="mb-6 lg:mb-0">
            <img
              src="https://i.pinimg.com/564x/ef/0a/b9/ef0ab93d14f9e2224672e47117a9e82d.jpg"
              class="w-full rounded-md shadow-lg" />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://i.pinimg.com/564x/5e/76/15/5e76154b5aa46da65e6b4c230fb4cf31.jpg"
              class="w-full rounded-md shadow-lg h-full" />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://i.pinimg.com/564x/5e/f1/e7/5ef1e7f080aea94eb3f3851c84fa11cd.jpg"
              class="w-full rounded-md shadow-lg" />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://i.pinimg.com/564x/c7/d1/d8/c7d1d8230479d7738e1296a100693976.jpg"
              class="w-full rounded-md shadow-lg h-full" />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://i.pinimg.com/564x/8e/bc/1f/8ebc1f65264977d0112e1f97f66a61ed.jpg"
              class="w-full rounded-md shadow-lg h-full" />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://i.pinimg.com/564x/40/a2/aa/40a2aad0f14587d73b9c610ef9cc52ff.jpg"
              class="w-full rounded-md shadow-lg h-full" />
          </div>
        </div>
      </div>
    
     
      <div class="w-full bg-secondary p-4 text-center">
        © 2023 Copyright:
      </div>
    </footer>
  )
}

export default Footer