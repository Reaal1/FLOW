import Flow from './assets/Group 1.png'
import hamburger1 from '././assets/menu-01 (1).png';
import {Button} from 'react-bootstrap';

const Navbar = () => {
    return ( 
        <nav className='navbar-starter'> 
            <div className='navbar-container'>
              <div className='navbar-logo'>
                <img className='navbar-img' src={Flow} alt="" />
              </div>
              <div className='navbar-Button_selector'>
                <p className='navbar-paragaraph'>Help Line</p>
                <Button id='navbar-Bootstrap_Button'  className='btn btn-dark'>Get Started</Button>
              </div>
              <div className="hamburger">
                <img className='bar' src={hamburger1} alt="" />
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;