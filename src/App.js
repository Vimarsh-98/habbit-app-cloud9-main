import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-dom-router'
import HomePage from './HomPage'
function App() {
  
  return (
    <div className="App">
      
      <HomePage/>
    </div>
  );
}

export default App;
