import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Router>
        <div className="container">
          <ul>            
                <li>
                  <Link to="/"> Home
                  </Link>
                </li>   
                <li>            
                  <Link to="/AboutUs"> AboutUs
                  </Link>
                </li>                
                <li>
                    <Link to="/ContactUs"> ContactUS
                  </Link>
                </li>
          </ul>
        </div>

<Route path="/" exact component={Home} />
<Route path="/AboutUs" component={AboutUs} />
<Route path="/ContactUs" component={ContactUs} />

      </Router>
      
    </div>
  );
}

export default App;
