import Cube from './assets/asset 03.png';
import Arrow from './assets/arrow-narrow-right.png';
import {Button} from 'react-bootstrap';

const Footer = () => {
    return ( 
        <div className='footer_container'>
            <div className='footer_container-content'>
            <p className='footer_container-paragraph1'>Setup FLOW in 30 seconds</p>
            <p className='footer_container-paragraph2'>Effortlessly integrate FLOW, the AI-powered productivity app, in just 30 seconds. With a quick and intuitive onboarding process, personalize your workspace and sync seamlessly with existing tools. Experience instant efficiency with FLOW.</p>
            <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
            </div>
            <div className='footer_image_container'>
                <img className='footer_image' src={Cube} alt="" />
            </div>
            <div className='footer_bottom-secton'>
               <a className='footer_lead' href=""> <p className='footer_bottom_logo'>FLOW</p></a>
                <div className='footer_bottom_connect'>
                <p className='footer_bottom_paragraph1'>Help Line</p>
                <p className='footer_bottom_paragraph2'>Company</p>
                <Button id='navbar-Bootstrap_Button_frame1'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
            </div>
            </div>
        </div>
     );
}
 
export default Footer;