import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'

import players from './store/players'
import Player from './pages/Player'
import NotFound from './NotFound'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            players: players
        }
    }

    render(){
        const{ players } = this.state

      return (
        <div className="App">
            <h1>Fantasy Baseball Stars</h1>

            <Router>
                <div>
                    <nav>
                        <h2>Players</h2>
                        <ul>
                            {players.map((player) =>
                                <li><a>
                                    <Link to={`/player/${player.id}`}>
                                        {player.name}
                                    </Link>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/player/:id" component={Player} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
      );
    }
}

export default App;
