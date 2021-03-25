import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/layouts/Header';
import Navigationbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      {/* <Navigationbar/> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Registration' component={Register}></Route>
      <Route exact path='/Login' component={Login}></Route>

    </div>
    </Router>
  );
}

export default App;
