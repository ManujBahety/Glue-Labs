import React, { Component } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import './Giphy.css'
import TextList from './TextList'

class Giphy extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            text: '',
            giphys: []
        }
        this.SearchHandle = this.SearchHandle.bind(this)
        this.Submit = this.Submit.bind(this)
    }

    SearchHandle = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text)
    }

    Submit = (event) => {
        const giphyapi = async () => {
            const key = new GiphyFetch('AJ4lFuY9sfMKoEcWWVePlhKsM2AiRcZF');
            const res = await key.animate(this.state.text,{limit: 25})
            
            this.setState({
                giphys: res.data
            })
        } 
        giphyapi()
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>Giphy Search</h1>
                <div>
                    <label> SEARCH: </label>
                    <input type="text" className='input-field' value={this.state.text} placeholder='Giphy' onChange={this.SearchHandle}/>
                </div>
                <button type="submit" className='sub-btn' onClick={this.Submit}>Search</button>
                <TextList gifs={this.state.giphys}/>
            </div>
        )
    }
}

export default Giphy