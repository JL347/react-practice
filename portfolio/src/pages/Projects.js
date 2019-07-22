import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

import PitchSpeed from './PitchSpeed'
import KickerAccuracy from './KickerAccuracy'

class Projects extends Component {
    render(){
      return (
        <div>
          <h2>Our Projects</h2>

          <Router>
            <div>
                <nav>
                  <ul>
                      <li>
                        <Link to="/projects/pitchspeed">Pitch Speed App</Link>
                      </li>
                      <li>
                        <Link to="/projects/kickeraccuracy">Kicker Accuracy App</Link>
                      </li>
                  </ul>
                </nav>

                <Route path="/projects/pitchspeed" component={PitchSpeed} />
                <Route path="/projects/kickeraccuracy" component={KickerAccuracy} />
            </div>
          </Router>
        </div>
      );
    }
}

export default Projects;
