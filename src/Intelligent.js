import Task from './assets/Card interraction (1).png';
import AITask from './assets/Frame 795.png';
import Dark1 from './assets/Dark (1).jpg';
import Arrow from './assets/arrow-narrow-right.png';
import {Button} from 'react-bootstrap';

const Intelligent = () => {
    return ( 
        <div className='intelligent_container'>
            <div className="intelligent_container_left">
                <div className="intelligent_container_left_paragraph" >
           <p className='intelligent_container_paragraph'>FLOW</p> 
           <p className='intelligent_container_paragraph2'>Intelligent Task Management</p>
           </div>
           <div className="intelligent_container_right">
            <img className="intelligent_container_right_image" src={Task} alt="" />
           </div>
           </div>
           <div className="intelligent_container_lower">
           <img className="intelligent_container_lower_left_image1" src={Dark1} alt="" />
             <img className="intelligent_container_lower_left_image" src={AITask} alt="" />
             <div className='intelligent_container_lower_right'>
              <p className="intelligent_container_right_paragraph">Analyze your team members' skills, workloads, and preferences for optimal task assignment; receive automated task allocation based on historical performance data and individual strengths.</p>
              <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
              </div>
           </div>
        </div>
     );
}
 
export default Intelligent;