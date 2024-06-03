import React, { useState } from 'react'
import Product from './Product'
import {motion} from 'framer-motion'

function Products() {
    var products = [{ title: 'Arquitels', description: "Arquels of products in the product store store with their unique",live:true,case:false},{
        title: 'TTR', description: "Arquels of products in the product store store with their unique",live:true,case:true},{
        title: 'Cula', description: "Arquels of products in the product store store with their unique",live:true,case:false},{
            title: 'YTR 2024', description: "Arquels of products in the product store store with their unique",live:true,case:false}
    ]

    const[pos,setPos]=useState(0);
    const mover=(val) => {
        setPos(val*23);
    }
    return (
        <div className='mt-32 relative'>
            {products.map((elem,index)=>(
                <Product key={index} val={elem} mover={mover} count={index} />
            ))}
            <div className='w-full h-full absolute top-0 pointer-events-none'>
                <motion.div initial={{y:pos,x:'-50%'}} animate={{y:pos+'rem'}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.6}} className=' window absolute w-[32rem] h-[23rem] overflow-hidden left-[45%] '>
                    <motion.div animate={{y:-pos+'rem'}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.5}}  className='w-full h-full '>
                        <video autoPlay loop muted  className='w-full h-full' src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.5}} className='w-full h-full '>
                    <video autoPlay loop muted  className='w-full h-full' src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.5}} className='w-full h-full '>
                    <video autoPlay loop muted  className='w-full h-full' src="https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4"></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.5}} className='w-full h-full '>
                    <video autoPlay loop muted  className='w-full h-full' src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"></video>
                    </motion.div>
                </motion.div>
            </div>
           
        </div>
    )
}

export default Products

