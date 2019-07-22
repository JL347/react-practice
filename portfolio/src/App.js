import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

import AboutMe from './pages/AboutMe'
import Skillz from './pages/Skillz'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

class App extends Component {
    render(){

      return (
        <div>
          <h1>Our Page</h1>

          <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">About Me</Link>
                        </li>
                        <li>
                            <Link to="/Skillz">Skillz</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/ContactMe">Contact Page</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={AboutMe} />
                <Route path="/Skillz" component={Skillz} />
                <Route path="/Projects" component={Projects} />
                <Route path="/ContactMe" component={ContactMe} />
            </div>
          </Router>
        </div>
      );
    }
}

export default App;
