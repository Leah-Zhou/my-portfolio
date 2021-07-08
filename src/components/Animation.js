import React, { useEffect, useRef } from 'react';
import './styleSheet/Animation.scss';
import ballPurple from  './assect/imgs/ball-purple.png';
import ballGray from  './assect/imgs/ball-gray.png';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Animation = () => {
  const tl=gsap.timeline({defaults:{duration:1.5, ease:"expo.out"}});
  const purple =useRef(null);
  const gray=useRef(null);
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.core.globals('ScrollTrigger', ScrollTrigger);

  useEffect(()=>{
    tl.fromTo(purple.current,{y:150, x:-180},{y:-20, x:20})
      .fromTo( gray.current, {y:0, x:200, opacity:0}, {y:-30, x:-100, opacity:1}, "<")
       .to(purple.current, {y:0, yoyo:true, repeat:-1, ease:"none", duration:6})
      .to(gray.current, {y:0, yoyo:true, repeat:-1, ease:"none", duration:4}, "<")
  }, [])
  return ( 
    <div className="canvas">
        <img src={ballPurple} alt="purple ball" className="ball-purple" ref={purple}/>
        <img src={ballGray} alt="gray ball" className="ball-gray" ref={gray}/>
    </div>

   );
}
 
export default Animation;