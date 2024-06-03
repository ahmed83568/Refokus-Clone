import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32 '>
            <div className='basis-1/2'>
            <h1 className='text-[11rem] font-semibold tracking-tight leading-none '>Refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-8'>
                <div className='basis-1/3'>
                    <h4 className='mb-5 text-zinc-500'>Socials</h4>
                    {['Instagram', 'Twitter', 'Linked in', 'Facebook'].map((item,index) =><a key={index} className='block mt-3 text-zinc-600'>{item}</a>)}
                </div>
                <div>
                    <h4 className='mb-5 text-zinc-500'>Socials</h4>
                    {['Instagram', 'Twitter', 'Linked in', 'Facebook'].map((item,index) =><a key={index } className='block mt-3 text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col justify-between items-end'>
                    <p className='text -right text-zinc-400'>Refokus is pioneeing website where they make very beautiful website.</p>
                    <img className='w-28 h-10' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661c1b5fd7aa742286c16467_webflow%20refokus%20(1).png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
