import React, { Component } from 'react'
import "./feed.css"

export default class Feed extends Component {

    state={ tweets:[]
    }
    componentDidMount(){
        fetch(`api/search?q=${this.props.name}`)
        .then(response => response.json())
        .then(data=> this.setState({tweets:data}))
    }
    render() {
        return (
            <div className="tweet-line">
                {
                    this.state.tweets.map(tweet =>{
                        return(
                            <div>
                            <div>
                                <p>Date: {tweet.created_at}</p>
                                </div>
                            <div>
                                <p>Text: {tweet.text}</p>
                                </div>
                            <div>
                                <p>User:{tweet.user.name}</p>
                            </div>
                            <hr style={{backgroundColor: 'black'}}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


