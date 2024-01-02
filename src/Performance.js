import Ellipse from './assets/Ellipse 4.png';
import Arrow from './assets/arrow-narrow-right.png';
import Dashboard1 from './assets/Dashboard (1).png';
import Dashboard from './assets/Dashboard.png';
import {Button} from 'react-bootstrap';

const Performance = () => {
    return ( 
        <div className="performance_container">
            <div className="performance_container_header">
                <div className='performance_paragraph_header'>
               <img className='performance_container_Ellipse' src={Ellipse} alt="ellipse" />
                <p className="performance_container_paragraph">Performance</p>
                </div>
                <p className="performance_container_paragraph2">FLOW streamlines your task assignments, 
                <br />enhances real-time collaboration, 
                <br />automates routine processes, and provides intelligent insights for optimized project outcomes.</p>
                <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
            </div>
            <div className='performance_container_image'>
                <div className='performance_container_image_photo'>
                <img className='performance_image1' src={Dashboard1} alt="performance_image" />
                <img className='performance_image' src={Dashboard} alt="performance_image" />
            </div>
            </div>
        </div>
     );
}
 
export default Performance;