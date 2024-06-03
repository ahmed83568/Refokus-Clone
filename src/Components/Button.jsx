import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title='Get Started'}) {
  return (
    <div className= ' w-32 px-4 py-2 font-["satoshi"] bg-zinc-100 rounded-full text-black flex items-center justify-between border-b-2 border-zinc-700 '>
        <span className='text-sm font-semibold'>{title}</span>
        <IoIosReturnRight />

    </div>
  )
}

export default Button
