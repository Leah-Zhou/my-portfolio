import React, { useEffect, useRef } from 'react';
import './styleSheet/Animation.scss';
import ballPurple from  './assect/imgs/ball-purple.png';
import ballGray from  './assect/imgs/ball-gray.png';
import gsap from 'gsap';

const Animation = () => {
  const tl=gsap.timeline({defaults:{duration:1.5, ease:"expo.out"}});
  const purple =useRef(null);
  const gray=useRef(null);
  useEffect(()=>{
    tl.fromTo(purple.current, {y:100}, {y:0})
      .fromTo( gray.current, {y:80, opacity:0}, {y:0, opacity:1}, "-=0.5")
  }, [])
  return ( 
    <div className="canvas">
        <img src={ballPurple} alt="purple ball" className="ball-purple" ref={purple}/>
        <img src={ballGray} alt="gray ball" className="ball-gray" ref={gray}/>
    </div>

   );
}
 
export default Animation;