import Flow from './assets/Group 1.png'
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
            </div>
        </nav>
     );
}
 
export default Navbar;