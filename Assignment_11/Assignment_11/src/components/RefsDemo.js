import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
        this.dropRef = React.createRef()
        this.radioRef = React.createRef()
        this.checkRef = React.createRef()
    }

    componentDidMount(){
        this.emailRef.current.focus()
    }

    clickHandler = () => {
        console.log(this.emailRef.current.value)
        console.log(this.commentRef.current.value)
        console.log(this.dropRef.current.value)
        console.log(this.checkRef.current.value)
        console.log(this.radioRef.current.value)
    }   

    render() {
        return (
            <>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" ref={this.emailRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <div>
                    <label htmlFor="language">Language: </label>
                    <select  id="language" ref={this.dropRef}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <div>
                    VUE <input  type="checkbox"  value="vue" ref={this.checkRef}/>
                    ANGULAR <input  type="checkbox" value="angular" ref={this.checkRef}/>
                    REACT <input type="checkbox"  value="react" ref={this.checkRef}/>
                </div>

                Male <input id="gender" type="radio" name="gender" value="male"  ref={this.radioRef}/>
                Female <input id="gender" type="radio" name="gender" value="female"  ref={this.radioRef}/>
                    
                <button onClick={this.clickHandler}>Submit</button>            
            </>
        )
    }
}

export default RefsDemo
