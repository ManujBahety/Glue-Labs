import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // let message;
        // if(this.state.isLoggedIn)
        //     message = <h1>Welcome Nabendu</h1>
        // else
        //     message = <h1>Welcome Guest</h1>

        // return <>{message}</>

        // return this.state.isLoggedIn ? (
        //     <>
        //         <h1>Welcome Nabendu</h1>
        //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, quasi.</p>
        //     </>
        // ) : (
        //     <>
        //         <h1>Welcome Guest</h1>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ratione autem, neque totam maiores praesentium.</p>
        //     </>
        // )

        return this.state.isLoggedIn && <h1>Welcome Nabendu</h1>
    }
}

export default UserGreeting
