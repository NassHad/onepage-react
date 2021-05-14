import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
     <Navbar/>
    </Router>
  );
}

export default App;
