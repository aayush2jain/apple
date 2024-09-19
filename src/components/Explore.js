'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import exploreVideo from '../assets/videos/explore.mp4'
import explore1 from '../assets/images/explore1.jpg'
import { explore2Img } from '@/utils'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const scrollRef = useRef();
  const exploreRef = useRef();

  useEffect(() => {
    const video = exploreRef.current;
    const el = scrollRef.current;

    gsap.to(video, {
      scrollTrigger: {
        trigger: video,
        toggleActions: 'play pause reverse restart',
        onEnter: () => video.play(),
        onEnterBack: () => video.play(),
      },
    });

    gsap.to('#img1,#img2', {
      opacity: 1,
      paddingRight: 0,
      paddingLeft: 0,
      duration: 3,
      scrollTrigger: {
        trigger: '#img1',
        scrub: 2,
        markers: false,
      },
    });

    gsap.to('#exploreh1,#exploreh2', {
      opacity: 1,
      y: -20,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: '#exploreh1',
        scrub: 2,
        markers: false,
      },
    });

    gsap.to("#ex", {
      scrollTrigger: {
        trigger: el,
        scrub: 2,
      },
      opacity: 1,
      duration: 2,
      delay: 2,
      y: -20,
    });
  }, []);

  return (
    <>
      <div id="box" className='box h-[100vh] bg-zinc-900 text-gray-400'>
        <h1 className="opacity-0 text-[10vh] pt-[10vh] pl-[5vw]" ref={scrollRef} id='ex'>
          Explore the full story.
        </h1>
        <h1 className='pl-[10vw] text-[12vh] text-white font-semibold'>iPhone.</h1>
        <h1 className='pl-[10vw] text-[12vh] text-white font-semibold'>Forged In Titanium</h1>
        <div className='flex flex-col bg-zinc-900'>
          <div>
            <video className='px-[10vw]' playsInline muted ref={exploreRef} autoPlay id="exploreVideo">
              <source src={exploreVideo} />
            </video>
          </div>
          
          <div className='flex flex-row px-[10vw] gap-[2vw] mb-[20vh] mt-[5vh]'>
            <div className='flex flex-col'>
              <div className='h-[82vh] w-[38vw] bg-black relative'>
                <Image src={explore1} className='pr-[4vw] opacity-0 absolute' height={1000} width={1000} id='img1'  alt='' />
              </div>
              <div className='pt-[20vh] font-semibold text-white text-xl ml-[6vw] mr-[10vw] opacity-0' id="exploreh1">
                <p>
                  iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='h-[88vh] w-[40vw] bg-black content-center'>
                <Image src={explore2Img} className='opacity-0 px-[2vw]' id="img2" height={1000} width={1000} alt='' />
              </div>
              <div className='pt-[14vh] font-semibold text-white text-xl ml-[6vw] mr-[10vw] opacity-0' id="exploreh2">
                <p>
                  Titanium has one of the best strength‑to‑weight ratios of any metal, making these our lightest Pro models ever. You’ll notice the difference the moment you pick one up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
