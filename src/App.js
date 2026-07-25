import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = { displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render () {

        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is James Bekis. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? ( 
                        <div>
                            <p>I live in Ontario, California and I code every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is a lot of fun.</p>
                            <p>Besides coding, I love to play golf. I currently hold a 23.2 ghin handicap.</p>
                            <button onClick={this.toggleDisplayBio}>Read less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;