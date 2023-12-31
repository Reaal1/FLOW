import Interaction from './assets/Card interraction.png';
import Holder from './assets/Frame 699.png';
import Arrow from './assets/arrow-narrow-right.png';
import {Button} from 'react-bootstrap';

const Frame = () => {
    return ( 
        <div className='frame_container'>
            <p className="frame-paragraph">
            FLOW streamlines your task assignments,
            <br /> enhances real-time collaboration, automates routine processes, 
            <br />and provides intelligent insights for optimized project outcomes. 
            </p>
            <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
            <div className='frame1_container'>
                <div className="frame1_container_left">
                    <p className='frame1_container_logo'>FLOW</p>
                    <p className='frame1_container_paragraph'>Real-Time Collaboration Hub</p>
                </div>
                <div className="frame1_container_right">
                    <img className='frame1_container_image' src={Interaction} alt="Card-Interaction" />
                </div>
            </div>
            <div className='frame2_container'>
                <div className="frame2_container_left">
                    <img className='frame2_container_image' src={Holder} alt="Holder" />
                </div>
                <div className="frame2_container_right">
                <p className='frame2_container_right_paragraph'>User collaboration in real-time via chat, comments, and file sharing with team.</p>
                <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
                </div>
            </div>
            </div>
        
     );
}
 
export default Frame;