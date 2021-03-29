import React from 'react';
import{Grid, Cell}from 'react-mdl';
import naming from './assect/imgs/sunnyop-naming.png';
import colorGuide from './assect/imgs/sunnyop-design-guide-color.png';
import fontGuide from './assect/imgs/sunnyop-design-guide-fonts.png';
import logoDesign from './assect/imgs/sunnyop-logo-design.png';

const  SunnyOp= () => {
  return (
    <div style={{marginTop:"100px"}}>
    <div className="hero-wrap unicup-bg">
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
      <p>SunnyOp is a partnership project between George Brown College and Sunnybrook health science center. The project's final goal is to build up an e-platform to optimize pre-surgical care for patients. I have participated as a UI and web designer in the first and second phases of the project. My main tasks are creating the project brand and build up the project website.</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Role</h5>
         <p className="role">UI designer and Front-end Web designer</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Tasks</h5>
        <ul>
          <li>
            <p style={{fontWeight:"700"}}>1. Branding for the project</p>
            <p className="role">Generate a project name that highlights the project value, spirit, and goal.</p>
            <p className="role">Design a project logo that expresses the project value.</p>
          </li>
          <li>
            <p style={{fontWeight:"700"}}>2. Building Project website</p>
            <p className="role">Create design guideline for web page design.</p>
            <p className="role">Build up a representative project web page on WordPress</p>
          </li>
        </ul>
      </Cell>
      </Grid>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Design Process</h4>
      </div>

      <div>
       <h5 className="highlight-title">Branding for the project</h5>
        <section>
          <p className="role">Naming Project</p>
          <div>
          <img src={naming}  alt="naming mind map" className="large-img" />
          </div>
          <p>
       The naming brainstorming uses the project value, project spirit, and project goal as start points. The mind map develops the inspiration for the project name. Based on the discussion, SunnyOp is chosen as the project name. It represents the project's goal which is optimizing pre-surgical care for patients. 
          </p>
        </section>
        <section>
        <p className="role">Logo Design</p>
          <div>
          <img src={logoDesign}  alt="SunnyOp logo design" className="large-img" />
          </div>
          <p>
            I looked for trending logo design inspiration and collected the ideas into mood boards. With the design ideas, I started my paper sketching and presented them to my team. After our discussion, we have our final decision. Then, I started creating the digital logo design and applied the design elements to it. The final logo design symbolizes teamwork spirit, unity, care, and support. 
          </p>
        </section>
      </div>
      <div>
      </div>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">Web page Design</h5>
      </Cell>
      <Cell phone={12} tablet={12} col={12}>
          <div>
           <img src={colorGuide}  alt="color guideline" className="img-size" />
           <img src={fontGuide}  alt="typography guideline" className="img-size" />
          </div>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
          <p>
          I used the mood boards to markdown inspiration and ideas for the webpage design. For the next step, I developed the design guideline based on the collected ideas. On the other hand, I started the template hunting on WordPress to look for a suitable layout. After implementing the template with contents, I worked on customizing the webpage design to optimize the visualization. 
          </p>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Final Web page Design</h4>
         <h4>Coming soon</h4>
      </div>
      </Cell>
      </Grid>   
    </div>
  );
}
 
export default SunnyOp;