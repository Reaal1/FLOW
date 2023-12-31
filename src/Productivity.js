import Real from './assets/users-plus.png';
import Efficient from './assets/file-02.png';
import Automatic from './assets/clipboard-check.png';
import Smart from './assets/calendar-check-01.png';
import Data from './assets/dataflow-03.png';
import Natural from './assets/translate-02.png';
import Integrations from './assets/tool-02.png';
import Security from './assets/tool-01.png';
import {Button} from 'react-bootstrap';

const Productivity = () => {
    return ( 
        <div className='Productivity_container'>
            <p className='Productivity_container_paragraph'>The Most Suitable Productivity
             <br /> Platform For Teams of All Sizes.</p>
             <div className='Productivity_container_buttons'>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Real} alt="real" />Real-time Collaboration</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Efficient} alt="efficient" />Efficient Task Management</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Automatic} alt="automatic" />Automatic Progress Tracking</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Smart} alt="smart" />Smart Scheduling & Resource Allocation</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Data} alt="data" />Data-Driven Decision Support</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Natural} alt="natural" />Natural Language Processing</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Integrations} alt="integrations" />Integrations</Button>
             <Button id='Bootstrap_Productivity' className='btn btn-dark'><img className='productivity_icon' src={Security} alt="security" />Security & Compliance</Button>
        </div>
        </div>
     );
}
 
export default Productivity;