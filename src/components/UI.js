import './styleSheet/Mywork.scss';
import React from 'react';
import controller from './assect/imgs/ui-controller.png';
import controllerOutline from './assect/imgs/ui-contoller-outline.png';
import gameboy from './assect/imgs/ui-gameboy.png';
import gameboyOutline from './assect/imgs/ui-gameboy-outline.png';
import watchfull from './assect/imgs/watch-closeshot.jpeg';
import watchCrown from './assect/imgs/watch-crown.jpg';
import watchGear from './assect/imgs/watch-gear.jpg';
import watchSide from './assect/imgs/watch-side.jpg';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';

const pageTransition={
  init:{
    opacity:0,
    y:"-20vh"
  },
  animate:{
    opacity:1, 
    y:0
  }
}
const transition ={
  type:"tween",
  ease: "anticipate",
  duration:1.2
}
const Gallery = () => {
  const content =[
    {name:"CONTROLLER ILLUSTRATION", 
    tool:" Adobe Illustrator",
    imgs:[{src:controller, alt:"controller"}, {src:controllerOutline, alt:"controller outline"}]
  },
  {name:"GAME BOY ILLUSTRATION", 
  tool:" Adobe Illustrator",
  imgs:[{src:gameboy, alt:"gameboy"}, {src:gameboyOutline, alt:"gameboy outline"}]
  },

  {name:"POKET WATCH MODELLING", 
  tool:"Maya",
  imgs:[{src:watchfull, alt:"watch"}, {src:watchCrown, alt:"crown of the watch"},{src:watchGear, alt:"gears in the watch"},{src:watchSide, alt:"inside the watch"}]
  },

  ]
  return ( 
    <motion.div className="ui-wrapper" variants={pageTransition} initial="init" animate="animate" exit="init" transition={transition}>
        <div>
          <h1>UI Gallery</h1>
      </div>
        {
          content.map(item=>(
        <div key={uuidv4()} className="gallery-section">
          <div className="gallery-intro">
            <h4>{item.name}</h4>
            <p>Tools:{item.tool}</p>
          </div>
           <div className="gallery-imgs">
            {item.imgs.map(img=>(
              <img src={img.src} alt={img.alt} className="img-size"  key={uuidv4()}/>
            ))}
           </div>
          </div>
          ))
        }
        <div className="gallery-intro">
          <h4>Motion Design</h4>
          <p>Tools: Maya, Adobe After Effect</p>
          <div className="video-wrapper">
               <ReactPlayer className="video" url='https://www.youtube.com/watch?v=PYT1HSTKzgQ' width="100%" height="100%" controls /> 
           </div>
           </div>
    </motion.div>
   );
}
 
export default Gallery;