import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';


function Card({width,start,para,hover='false'}) {
  return (
    <motion.div  whileHover={{backgroundColor:hover?'#7443ff':'',padding:'25px'}} className={` bg-zinc-800 p-5 rounded-xl ${width}  flex flex-col justify-between min-h-[30rem]`}>
    <div className='w-full'>
    <div className='w-full flex justify-between items-center mt-5'>
        <h3>one heading</h3>
        <FaArrowRight />
    </div>
        <h1 className='text-3xl font-medium mt-10'>Whatever heading.</h1>
    </div>
    <div className='down w-full'>
    {start===true?(
        <>
         <h1 className='font-semibold text-6xl tracking-tight leading-none'>start a project</h1>
        <button className='rounded-full py-2 px-3 border-[1px] border-zinc-50 mt-7 '>Contact Us</button>
        </>
        ):null}
       
        {para===true?(
            <p className='text-sm text-zinc-500 font-medium '>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        ) : null}
    </div>
    </motion.div>
  )
}

export default Card

