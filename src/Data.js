import CardInt1 from './assets/Performance card (1).png';
import CardInt2 from './assets/Performance card (2).png';
import PerformanceCard from './assets/Performance card.png';
import Arrow from './assets/arrow-narrow-right.png';
import {Button} from 'react-bootstrap';


const Data = () => {
    return ( 
        <div className='data_container'>
        <div className='data_container_top'>
        <div className='data_container_top_paragraph-section'>
        <p className='data_container_top_paragraph1'>FLOW</p>
        <p className='data_container_top_paragraph2'>Data-Driven
        <br /> Decision Support </p>
      </div>
      <div className='data_container_top-image_section'>
      <img className='data_container_top_image2' src={CardInt2} alt="" />
         <img className='data_container_top_image' src={CardInt1} alt="" />
      </div>
      </div>
      <div className='data_container_bottom'>
        <div className='data_container_bottom_image_section'>
            <img className='data_container_bottom_image' src={PerformanceCard} alt="" />
        </div>
        <div className='data_container_bottom-section' >
        <div className='data_container_bottom_paragraph-section'>
            <p className='data_container_bottom_paragraph'>AI-generated insights for decision-making, risk assessment, and resource optimization. Stay informed on historical project data analysis to improve future project planning.</p>
        </div>
        <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
        </div>
      </div>
      </div>
     );
}
 
export default Data;