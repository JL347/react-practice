import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

import Jared from './Jared'
import Evan from './Evan'

class ContactMe extends Component {
    render(){
      return (
        <div>
          <h2>Contact Page</h2>

          <Router>
            <div>
                <nav>
                  <ul>
                      <li>
                        <Link to="/contactme/jared">Jared's Contact Info</Link>
                      </li>
                      <li>
                        <Link to="/contactme/evan">Evan's Contact Info</Link>
                      </li>
                  </ul>
                </nav>

                <Route path="/contactme/jared" component={Jared} />
                <Route path="/contactme/evan" component={Evan} />
            </div>
          </Router>
        </div>
      );
    }
}

export default ContactMe;
