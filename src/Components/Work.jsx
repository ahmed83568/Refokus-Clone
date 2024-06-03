import React, { useState } from 'react'
import { motion,useScroll,useMotionValue } from "framer-motion"

function Work() {
    const[images,setImages]=useState([{ url: "https://images.unsplash.com/photo-1711699486853-071af06b6c2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D", isActive: false, top: '40%', left: '50%' },
    { url: "https://images.unsplash.com/photo-1712830740437-50541b5f8c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D", isActive: false, top: '56%', left: '54%' }, { url: "https://images.unsplash.com/photo-1712851245795-5291ca32045c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D", isActive: false, top:'44%', left: '48%' }, { url: "https://images.unsplash.com/photo-1711409996542-ff91ab93774c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D", isActive: false, top: '59%', left: '45%' }, { url: "https://images.unsplash.com/photo-1712675009273-5a6c46663fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D", isActive: false, top: '63%', left: '60%' }]);
    const {scrollYProgress} = useScroll();
       scrollYProgress.on("change",(data)=>{
        function imagesshow(arr){
            setImages(prev=>(
                prev.map((item,index)=>(
                    arr.indexOf(index)===-1 ?(
                        {...item,isActive:false}
                    ): {...item,isActive:true}
                    
                ))
            ))
        }
        switch(Math.floor(data*100)){
            case 0:
                imagesshow([])
                break;
            case 1:
                imagesshow([0])
                break;
            case 3:
                imagesshow([0,1]) 
                break;
            case 5:
                imagesshow([0,1,2,3])
                break;
            case 7:
                imagesshow([0,1,2,3,4])
                break;
        }
       })
        
    return (
        <div className='w-full mt-10'>
            <div className='relative max-w-screen-xl mx-auto '>
                <h1 className='text-[29vw] leading-none text-center font-medium select-none tracking-tight '>Work</h1>
                <div className=' absolute top-0 w-full h-full'>
                    {images.map((elem,index)=>(elem.isActive&&(<img key={index} className=' absolute w-52 rounded-lg -translate-x-[50%] -translate-y-[50%] ' src={elem.url} style={{top:elem.top,left:elem.left}} alt="" />))
                        
                    )}
                </div>
            </div>
        </div>
    )
}

export default Work
