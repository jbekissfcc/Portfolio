import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';
import profile from 'url:../assets/jbekis_profile_headshot.jpeg';

class App extends Component {

  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render () {
    return (
      <div>
        {/* class is already a reserved keyword in javascript, so, use className to assign classes to html elements */}
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is James Bekis.</p>
        <Title />
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
        <hr />
        <Projects />
        <hr />
        <Jokes />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;