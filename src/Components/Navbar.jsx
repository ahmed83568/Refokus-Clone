import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='mx-auto max-w-screen-xl py-6 flex items-center justify-between'>
        <div className='nleft flex items-center'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='link flex gap-14 items-center'>
            {['Home', 'Work','Culture','','Newsletter'].map((item,index)=>item.length===0?<span  key={index} className='w-[2px] h-7 bg-zinc-700'></span>:(<a key={index} className=' font-medium text-sm ml-10 flex items-center gap-1' href='#'>
            {index===1 &&(<span style={{boxShadow:"0 0 0.25em #00FF19"}} className='inline-block w-[6px] h-[6px] rounded-full bg-green-500  '></span>)}
            
            {item}</a>))}
        </div> 
        </div>
        <Button/>
    </div>
  )
}

export default Navbar
