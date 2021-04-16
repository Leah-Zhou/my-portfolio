import React from 'react';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Sunnyop.scss';
import naming from './assect/imgs/sunnyop-naming.png';
import colorGuide from './assect/imgs/sunnyop-design-guide-color.png';
import fontGuide from './assect/imgs/sunnyop-design-guide-fonts.png';
import logoDesign from './assect/imgs/sunnyop-logo-design.png';
import mockupDisplay from './assect/imgs/sunnyop-mockup-display.png';
import { v4 as uuidv4 } from 'uuid'

const  SunnyOp= () => {
  return (
    <div style={{marginTop:"100px"}}>
    <div className="sunnyop-bg">
     <div></div>
     <section className="project-title">
       <h2 style={{fontWeight:"800"}}>SunnyOp Branding Design Show Case</h2>
       <p className="header-subtitle"> GBC<span>	&#38;</span>SunnyBrook Science Center Cooperative project</p>
       <a  href="https://sunnyop.georgebrown.ca/" target="_blank" className="btn-link">Website Link</a>
     </section>
    </div>
    <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Project Intro</h4>
      </div>
      <p>SunnyOp is a partnership project between George Brown College and Sunnybrook health science center. The project's final goal is to build up an e-platform to optimize pre-surgical care for patients. It is an on-going two years project.I have participated as a UI and web designer in the first and second phases of the project. My main tasks are creating the project brand and build up the project website.</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Role</h5>
         <p className="role">UI designer and Front-end Web designer</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Tasks</h5>
        <ul>
          <li key={uuidv4()}>
            <p style={{fontWeight:"700"}}>1. Branding for the project</p>
            <ul>
            <li key={uuidv4()}> 
              <p className="role">Generate a project name that highlights the project value, spirit, and goal.</p></li>
            <li key={uuidv4()}>
              <p className="role">Design a project logo that expresses the project value.</p>
            </li>
            </ul>


          </li>
          <li key={uuidv4()}>
            <p style={{fontWeight:"700"}}>2. Building Project website</p>
            <ul>
              <li key={uuidv4()}>
                <p className="role">Create design guideline and web page prototype.</p>
              </li>
              <li key={uuidv4()}>
                <p className="role">Build up a representative project web page on WordPress</p>
              </li>
            </ul>
          </li>
        </ul>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Design Process</h4>
      </div>
      <div>
       <h5 className="highlight-title">Branding for the project</h5>
        <section>
          <p className="role thick-font">Naming Project</p>
          <div>
          <img src={naming}  alt="naming mind map" className="large-img" />
          </div>
          <p>
       The naming brainstorming uses the project value, project spirit, and project goal as start points. The mind map develops the inspiration for the project name. Based on the discussion, SunnyOp is chosen as the project name. It represents the project's goal which is optimizing pre-surgical care for patients. 
          </p>
        </section>
        <section>
        <p className="role thick-font">Logo Design</p>
          <div>
          <img src={logoDesign}  alt="SunnyOp logo design" className="large-img" />
          </div>
          <p>
            I looked for trending logo design inspiration and collected the ideas into mood boards. With the design ideas, I started my paper sketching and presented them to my team. After our discussion, we have our final decision. Then, I started creating the digital logo design and applied the design elements to it. The final logo design symbolizes teamwork spirit, unity, care, and support. The logo design plays with positive and negative space. The positive space shapes the letter S, which stands for SunnyOp. The negative space shows that two hands reach out together. It symbolized help, support, and care. 
          </p>
        </section>
      </div>
      <div>
      </div>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">Web page Design</h5>
          <p className="role thick-font">Design Guideline</p>
      </Cell>
      <Cell phone={12} tablet={12} col={6}>
           <img src={colorGuide}  alt="color guideline" className="img-size" />
     </Cell>
     <Cell phone={12} tablet={12} col={6}>
           <img src={fontGuide}  alt="typography guideline" className="img-size" />
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
          <p>
          I started the web page design by creating the design guideline, which blends Sunnybrook's website design guideline with creative ideas. At the same time,I used the mood boards to markdown inspiration and ideas for the webpage design.</p>
          <div>
            <p className="role thick-font">Web page mockup</p>
           <div>
             <img src={mockupDisplay} alt="mockup display" className="large-img"/>
           <a  href="https://www.figma.com/file/MkVES2EMflZklGXz9vXp8G/SunnyOp-website?node-id=0%3A1" target="_blank" className="btn-link" style={{display:"block", margin:"1em auto"}}>Mockup</a>
            </div>
          </div>
          <p>
          With inspiration from mood boards, I designed the web page wireframe and mockup. The web page is designed with a one-page layout, which helps the viewers have intuitive visualization and understandings of the project. I also applied representative illustrations and icons for corresponded content. Visualizing the content could increase viewers' interest in the project.I shared the mockup with my team and polished it with feedbacks. After the mockup got finalized, I started the template hunting on WordPress to look for a suitable layout. After implementing the template with contents, I worked on customizing the webpage design to align with the mockup design. 
          </p>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Final Web page Design</h4>
      </div>
      <p>The final web page is published and avaiable for visit. More project research outcome will be published to the website.</p>
      </Cell>
      </Grid>   
    </div>
  );
}
 
export default SunnyOp;