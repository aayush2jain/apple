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

    gsap.to('#img1', {
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
     gsap.to('#img2', {
      opacity: 1,
      paddingRight: 0,
      paddingLeft: 0,
      duration: 3,
      scrollTrigger: {
        trigger: '#img2',
        scrub: 2,
        markers: false,
      },
    });
    gsap.to('#exploreh1', {
      opacity: 1,
      y: -20,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: '#exploreh1',
        end:'top 40%',
        scrub: 2,
        markers: false,
      },
    });
    gsap.to('#exploreh2', {
      opacity: 1,
      y: -20,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: '#exploreh2',
        end:'top 40%',
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
        <h1 className="opacity-0 md:text-[10vh] text-[5vh] pt-[10vh] pl-[5vw]" ref={scrollRef} id='ex'>
          Explore the full story.
        </h1>
        <h1 className='pl-[10vw] md:text-[12vh] text-[6vh] text-white font-semibold'>iPhone.</h1>
        <h1 className='md:pl-[10vw] md:text-[12vh] pl-[10vw] text-[5.5vh] text-white font-semibold'>Forged In Titanium</h1>
        <div className='flex flex-col bg-zinc-900'>
          <div>
            <video className='px-[10vw] mt-[5vh] md:mt-0' playsInline muted ref={exploreRef} autoPlay id="exploreVideo">
              <source src={exploreVideo} />
            </video>
          </div>
          
          <div className='flex md:flex-row  flex-col px-[10vw] gap-[2vw] mb-[20vh] mt-[5vh]'>
            <div className='flex flex-col'>
              <div className='md:h-[82vh] h-full md:w-[38vw] w-full bg-black relative'>
                <Image src={explore1} className='pr-[4vw] opacity-0 absolute' height={1000} width={1000} id='img1'  alt='' />
              </div>
              <div className='mt-[60vh] md:mt-[20vh] text-center md:text-start font-semibold text-white text-xl ml-[6vw] mr-[10vw] opacity-0' id="exploreh1">
                <p>
                  iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='md:h-[88vh] h-full md:w-[40vw] w-full bg-black content-center'>
                <Image src={explore2Img} className='opacity-0 px-[2vw]' id="img2" height={1000} width={1000} alt='' />
              </div>
              <div className='pt-[14vh] text-center font-semibold text-white text-xl ml-[6vw] mr-[10vw] opacity-0' id="exploreh2">
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
