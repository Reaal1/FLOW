import Ellipse from './assets/Ellipse 4.png';
import Arrow from './assets/arrow-narrow-right.png';
import Group from './assets/Group 4.png';
import {Button} from 'react-bootstrap';

const Flow = () => {
    return ( 
        <div className="flow_container">
        <div className="flow_container_header">
            <div className='flow_paragraph_header'>
           <img className='flow_container_Ellipse' src={Ellipse} alt="ellipse" />
            <p className="flow_container_paragraph">Performance</p>
            </div>
            <p className="flow_container_paragraph2">FLOW is integrated with seamless integration with popular project management tools and platforms. 
            Provide API support for custom integrations with other business applications.</p>
            <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
        </div>
        <div className='flow_container_image'>
            <div className='flow_container_image_photo'>
            <img className='flow_image' src={Group} alt="performance_image" />
        </div>
        </div>
    </div>
     );
}
 
export default Flow;