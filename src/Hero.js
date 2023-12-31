import HeroBody from './assets/asset 25.png';
import Companies from './assets/COMPANIES.png';
import Arrow from './assets/arrow-narrow-right.png';

import {Button} from 'react-bootstrap';

const Hero = () => {
    return ( 
        <main className='hero-main1'>
            <div className='hero-container'>
                <img className='hero-section_image' src={HeroBody} alt="Body" />
                <div className='hero-main2'>
                <div className='hero-details'>
               <p className='hero-pargraph'>Revolutionizing the way teams 
                    <br />collaborate and manage projects 
                    <br /> by leveraging <span className='hero-advance_paragraph'>advanced artificial 
                    <br /> intelligence </span></p> 
                    <div className='hero-button_holder'>
                    <Button id='navbar-Bootstrap_Button_Hero'  className='btn btn-light'>Get started <img className='arrow-right' src={Arrow} alt="arrow" /></Button> 
                    </div>
                </div>
                <div className='hero-lower-section'>
                    <p className='hero-paragraph2'>The world 's largest organizations trust The FLOW platform.</p>
                    <div>
                       <img className='hero-group_image' src={Companies} alt="Company-Group" /> 
                       
                    </div>
                </div>
            </div>
            </div>
        </main>
     );
}
 
export default Hero;