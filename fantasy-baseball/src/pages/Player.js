import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'

import players from '../store/players'
import NotFound from '../NotFound'

export default class Player extends Component {
    constructor(props){
        super(props)
        const{ match } = props

        this.state={
            playerId: match.params.id
        }
    }

    componentDidUpdate(prevProps){
        const prevMatch = prevProps.match
        const{ match } = this.props
        if(match.params.id != prevMatch.params.id){
            this.setState({playerId: match.params.id})
        }
    }

    render(){
        const{ playerId } = this.state
        const player = players.find((p) => p.id == playerId)

        return(
            <div>
                <Switch>
                    {player &&
                        <div>
                            <h1>{player.name}</h1>
                            <p>Position: {player.position}</p>
                            <p>Strikeouts: {player.strikeouts}</p>
                        </div>
                    }
                <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}
