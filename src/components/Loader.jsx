import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import tire from '../assets/tire_4465995.png'
import rev from '../assets/car rev.mp3'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Tween } from 'gsap/gsap-core';

const Loader = () => {
  var audioplay = document.createElement('audio');
        audioplay.setAttribute('src', '../assets/car rev.mp3');
  const timeline = gsap.timeline({
    // repeat: -1, repeatDelay: 1, yoyo: false
    });


    useGSAP(()=>{
      timeline.to('#reveal', {
        x: 0,
        y:100,
        width: 5,
        height: 5,
        backgroundColor: 'purple',
        borderRadius: '100%',
        duration: 1,
        ease: 'bounce'
      })
      timeline.to('#reveal', {
        x: 0,
        y:100,
        width: 3,
        height: 100,
        backgroundColor: 'purple',
        borderRadius: '10%',
        duration: 1,
        // ease: 'sine.in'
      })
      timeline.to('#reveal', {
        x: 180,
        y:100,
        width: 5,
        height: 100,
        backgroundColor: 'purple',
        borderRadius: '10%',
        duration: 2,
        ease: 'sine.in'
      })
      timeline.to('#hide', {
        x: 180,
        backgroundColor: 'black',
        duration: 2,
        ease: 'sine.in',
        delay: "-2"
      })
      timeline.to('#reveal', {
        width: 5,
        height: 5,
        y: 165,
        duration: 0.5,
        ease: 'sine.in'
      })
      timeline.to('#tire',{
        visibility:"visible",
        duration: 0.5
      })
      Tween.to(".blue",5,{x:200,
        onStart:function(){audioplay.play()},
        onComplete:function(){audioplay.pause()}
     })
      timeline.to('#tire',{
        visibility:"visible",
        rotate: 360,
        marginTop: 38,
        duration: 2,
        ease:'power1.inOut'
      })
      timeline.to('#name', {
        color: 'white',
        ease: 'bounce.out',
        duration: 0.3
      })
      timeline.to('#name', {
        color: 'orange',
        ease: 'bounce.out',
        duration: 0.3
      })
      timeline.to('#name', {
        color: 'white',
        ease: 'bounce.out',
        duration: 0.3
      })
      timeline.to('#name', {
        color: 'orange',
        ease: 'bounce.out',
        duration: 0.3
      })
      timeline.to('#name', {
        color: 'grey',
        ease: 'bounce.out',
        duration: 0.2,
        textShadow: '2px 6px 6px rgba(255,255,255,0.6);'
      })
      timeline.to('#name', {
        color: 'orange',
        ease: 'bounce.out',
        duration: 0.2,
        textShadow: '2px 6px 6px rgba(255,255,255,0.6);'
      })
      timeline.to('#reveal', {
        width: 180,
        height: 3,
        x: 5,
        borderRadius: '10%',
        duration: 1.5,
        ease: 'bounce.out'
      })
    },[])
  return (
    <div className=' h-[100vh] w-[100vw] relative align-middle place-content-center bg-black'>
          <span className=' font-semibold top-50% relative text-2xl tracking-widest' id='name'>ZENCRAIZEE</span>
          <div className='top-[42vh] left-[43.2vw] flex flex-row align-middle absolute'>
            <div className='w-[3px] h-[3px] bg-white rounded-full z-50 -mt-[100px]' id='reveal'></div>
            <div className=' w-[180px] h-[100px] z-30 absolute bg-black' id='hide'><img src={tire} className=' object-contain w-5 invisible' id='tire'/></div>
          </div>
          <ReactAudioPlayer
            src={rev}
            autoPlay
            controls
            className=' absolute invisible'

          />


    </div>
  )
}

export default Loader
