import DataFlow from './assets/dataflow-04.png';
import Face from './assets/face-happy.png';
import User from './assets/users-check.png';
import UserDown from './assets/user-down-01.png';
import Flock from './assets/file-lock-02.png';
import NotText from './assets/notification-text.png';
import Atom from './assets/atom-02.png';
import Grid from './assets/grid-03.png';
import Arrow from './assets/arrow-narrow-right.png';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';


const NLP = () => {
    return ( 
        <div className='NLP-container'>
            <div className='NLP-container_content'>
            <p className='NLP-container_parahraph1'>Natural Language Processing (NLP) for Effective Team Communication</p>
            <p className='NLP-container_paragraph2'>Integrated AI-driven sentiment analysis to gauge team morale and identify potential issues. We also implemented Natural Language Processing (NLP) in communication tools for efficient and accurate understanding of team discussions. </p>
            <Button id='navbar-Bootstrap_Button_frame'  className='btn btn-light'>Get Started <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
            </div>
            <div className="container">
<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col">
      <div className="p-3 bg"> 
      <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={DataFlow} alt="" />
      <div className='NLP_header'>Real-Time Channels Communication Monitoring</div>
      </div>
      <p className='NLP_header_body'>Continuously monitor communication channels within the platform, including chat messages, comments, and any written interactions between team members to stay updated on communication effectiveness.</p>
    </div>
    </div>
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={Face} alt="" />
        <div className='NLP_header'>Emotional Classification</div>
        </div>
      <p className='NLP_header_body'>Emotional classification system categorizing messages into different sentiment classes such as positive, negative, or neutral, going beyond mere keyword analysis to consider overall context and tone of communication.</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={User} alt="" />
        <div className='NLP_header'>Team Morale Assessment</div>
        </div>
      <p className='NLP_header_body'>Aggregate sentiment analysis results to provide an overall assessment of team morale, generate visual representations on the user interface that reflects the prevailing emotional tone within the team.</p>
    </div>
    </div>
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={UserDown} alt="" />
        <div className='NLP_header'>User Feedback Loop</div>
        </div>
      <p className='NLP_header_body'>Established feedback mechanism where team members provide input on the accuracy of sentiment analysis results. This feedback loop contributes to the continuous improvement of our system.</p>
    </div>
    </div>
    </div>
    <div className='row_lower'>
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={Flock} alt="" />
        <div className='NLP_header'>Privacy Considerations</div>
        </div>
      <p className='NLP_header_body'>Implemented measures to ensure team members privacy from analyzing personal communication. User consent and clear communication about the purpose of sentiment analysis maintains trust.</p>
    </div>
    </div>
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={NotText} alt="" />
       <div className='NLP_header'> Customizable Alerts and Notifications</div>
       </div>
      <p className='NLP_header_body'>Team members to set up customizable alerts  based on sentiment thresholds. Project managers receives alert if sentiment within a particular project team becomes consistently negative, prompting proactive intervention.</p>
    </div>
    </div>
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={Atom} alt="" />
       <div className='NLP_header'> Continuous Learning and Adaptation</div>
       </div>
      <p className='NLP_header_body'>Incorporated machine learning components enables sentiment analysis system to learn over time, ensuring FLOW becomes more accurate and context-aware when processing data and communication styles.</p>
    </div>
    </div>
    <div className="col">
      <div className="p-3 bg">
        <div className='Bootstrap_gutter'>
      <img className='NLP_image' src={Grid} alt="" />
       <div className='NLP_header'> Issue Identification</div>
       </div>
      <p className='NLP_header_body'>Sentimental analysis identifying potential issues or conflicts within the team, recognizes patterns of negative sentiments, spikes in stress-related language, or sudden shift in communication dynamics.</p>
    </div>
    </div>
    </div>
    </div>
    <Button id='navbar-Bootstrap_Button_frame10'  className='btn btn-light'>See More <img className='arrow-right_frame' src={Arrow} alt="arrow" /></Button>
</div>
        </div>
     );
}
 
export default NLP;