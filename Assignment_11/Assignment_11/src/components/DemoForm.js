import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            comment: '',
            language: 'vue',
            languages: {
                vue: false,
                angular: false,
                react: false
            },
            gender: {
                male: false,
                female: false
            }
        }
    }

    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    changeCommentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    changeLangHandler = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    handleCheckbox = (event) => {
        console.log(event.target.value);
        let state = this.state;
        state.languages[event.target.value] = event.target.checked;
        this.setState(state);
        console.log(this.state.languages);
    }
    handleRadiobox = (event) => {
        console.log(event.target.value);
        let state = this.state;
        state.gender[event.target.value] = event.target.checked;
        this.setState(state);
        console.log(this.state.gender);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.changeEmailHandler} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.changeCommentHandler}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language: </label>
                    <select value={this.state.language} id="language" onChange={this.changeLangHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />

                <div>
                    VUE <input onChange={this.handleCheckbox} type="checkbox" name="languages" value="vue" checked={this.state.languages.vue}/>
                    ANGULAR <input onChange={this.handleCheckbox} type="checkbox" name="languages" value="angular" checked={this.state.languages.angular}/>
                    REACT <input onChange={this.handleCheckbox} type="checkbox" name="languages" value="react" checked={this.state.languages.react}/>
                </div>

                    Male <input onChange={this.handleRadiobox} type="radio" name="gender" value="male" checked={this.state.gender.male}/>
                    Female <input onChange={this.handleRadiobox} type="radio" name="gender" value="female" checked={this.state.gender.female}/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default DemoForm
