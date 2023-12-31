import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navbar from './Navbar';
import Hero from './Hero';
import Frame from './Frame';
import Productivity from './Productivity';
import Intelligent from './Intelligent';
import Performance from './Performance';
import Automated from './Automated';
import Data from './Data';
import Flow from './Flow';
import NLP from './NLP';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
        <Frame/>
        <Productivity/>
        <Intelligent/>
        <Performance/>
        <Automated/>
        <Data/>
        <Flow/>
        <NLP/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
