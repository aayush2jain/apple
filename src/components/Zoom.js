'use client'
import React from 'react'
import { zoomvideo } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Zoom = () => {
  useGSAP(()=>{
    gsap.to('#zoom1',{
        opacity:1,
        y:20,
        delay:1,
        scrollTrigger:{
          trigger:'#zoom1',
          end:'top 40%',
          scrub:2,
        },
       
    })
    gsap.to('#zoom2',{
        opacity:1,
        y:20,
        duration:2,
        scrollTrigger:{
          trigger:'#zoom2',
          end:'top 40%',
          scrub:2,
        },
       
    })
    gsap.to('#zoom3',{
        opacity:1,
        y:20,
        duration:2,
        scrollTrigger:{
          trigger:'#zoom3',
          end:'top 40%',
          scrub:2,
        },
       
    })
  })
  return (
    <>
    <div className='zoom bg-black text-white  font-semibold md:text-[14vh] text-[14vw] md:pt-[50vh] pt-[20vh]' id='zoom'>
      <h1 className='text-center'>120 mm of</h1>
      <h1 className='text-center'>pure Pro zoom</h1>
      
      <video className=' w-[80vw] mx-[10vw] md:mt-[20vh] mt-[10vh] ' src={zoomvideo} autoPlay muted
      >
      </video>
      <div className='flex flex-col '>
        <div className='flex md:flex-row md:mt-[14vh] mt-[4vh] flex-col-reverse'>
          <div className='text-xl md:text-start text-center md:w-[40vw] md:ml-[20vw] md:pr-[16vw] text-gray-400 opacity-0 ' id="zoom2">
            For iPhone 15 Pro Max, we designed a 5x Telephoto camera with the longest
           optical zoom of any iPhone ever to fit in our compact Pro camera system.
          </div>

          <div className='md:text-[9vh] text-[9vw] md:w-[40vw] flex flex-col md:items-start items-center opacity-0' id="zoom1" >
            <h1 className='py-0'>5x optical</h1>
              <h1 className='py-0'>zoom</h1>
                <h1 className='text-lg text-gray-400'>with the 120mm lens</h1>
          </div>
        </div>
        <div className='text-xl md:text-start text-center md:w-[40vw] md:ml-[20vw] md:pr-[10vw] mt-[6vh] text-gray-400 mb-[20vh] opacity-0' id="zoom3">
          <p>Now you can take sharper close‑ups from farther away — like a phenomenal photo of your friend or
             a goal in your kid’s soccer match.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Zoom
