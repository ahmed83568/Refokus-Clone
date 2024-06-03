import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data=[
    {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg',number:22},
    {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg',number:42},
    {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg',number:12},
    {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg',number:33},
    {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg',number:42},
    {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg',number:12}]
  return (
    <>
    <div className='flex  mt-28'>
      {data.map((elem,index)=>(
        <Stripe key={index} val={elem}/>
       
      ))}
      
    </div>
    </>
  )
}

export default Stripes

