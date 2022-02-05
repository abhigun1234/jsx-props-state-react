import logo from './logo.svg';
import './App.css';
import JsxDemo from './JsxDemo';
import Greet from './Greet';
import hello from './Modulename'
import Welcome from './Welcome';
import StateDemo from './StateDemo';
import WelomeToJsx from './WelomeToJsx';
import PropsDataClass from './PropsDataClass';
import StateDemoForClass from './StateDemoForClass';
import User from './User';
import Consumer from './Consumer';
import EventFunction from './EventFunction';
import EventClass from './EventClass';
function App() {

  return (
    <div className="App">
  
  {/* <JsxDemo></JsxDemo> */}
    {/* <User name="rakesh" email="rakesh@gmail.com"></User>
    <User name="ram" email="ram@gmail.com"></User>
    <User name="raj" email="raj@gmail.com"></User>
    <User name="rahul" email="rahul@gmail.com"></User>
    
   */}
   {/* <EventClass></EventClass>
    */}
    <Consumer name="rakesh" email="rakesh@gmail.com"></Consumer>
    {/* <Consumer name="ram" email="ram@gmail.com"></Consumer>
    <Consumer name="raj" email="raj@gmail.com"></Consumer>
    <Consumer name="rahul" email="rahul@gmail.com"></Consumer> */}
    </div>
  );
}

export default App;
 

