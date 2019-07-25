import React, { Component } from 'react'
import Board from './Board'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            board: ['','','','','','','','',''],
            wins: 0
        }
    }
    handleClick = () => {
        console.log('I was clicked')
    }
    render () {

        return (
            <React.Fragment>
                <section className="game-board" >
                    <Board handleClick={this.handleClick}/>
                </section>
            </React.Fragment>
        )
    }

}

export default Home