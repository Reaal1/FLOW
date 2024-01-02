import CardInt from './assets/Card interraction (2).png';
import CardInt1 from './assets/Progress tracking card (1).png';
import ProgressTrack from './assets/Progress tracking card.png';
import Arrow from './assets/arrow-narrow-right.png';
import {Button} from 'react-bootstrap';


const Automated = () => {
    return ( 
        <div className='automated_container'>
            <div className='automated_container_top'>
            <div className='automated_container_top_paragraph-section'>
            <p className='automated_container_top_paragraph1'>FLOW</p>
            <p className='automated_container_top_paragraph2'>Automated
            <br /> Progress Tracking</p>
          </div>
          <div className='automated_container_top-image_section'>
          <img className='automated_container_top_image1' src={CardInt1} alt="" />
             <img className='automated_container_top_image' src={CardInt} alt="" />
          </div>
          </div>
          <div className='automated_container_bottom'>
            <div className='automated_container_bottom_image_section'>
                <img className='automated_container_bottom_image' src={ProgressTrack} alt="" />
            </div>
            <div className='automated_container_bottom-section' >
            <div className='automated_container_bottom_paragraph-section'>
                <p className='automated_container_bottom_paragraph'>Receive our AI-driven progress tracking that updates in real-time. Predictive analytics for identifying potential project delays and bottlenecks.</p>
            </div>
            <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
            </div>
          </div>
          </div>
     );
}
 
export default Automated;