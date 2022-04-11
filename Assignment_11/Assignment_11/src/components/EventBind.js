import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello World!!'
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name){
        this.setState({
            message: 'Hello React!!'
        })
        console.log(this)
        console.log(name)
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
                <button onClick={() => this.handleClick('Nabendu')}>Click</button>
            </div>
        )
    }
}

export default EventBind
