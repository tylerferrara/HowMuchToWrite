import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {
      words: null,
      redirect: false
    }
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter' && this.state.words > 0) {
      console.log('you pressed enter!!!');
      this.setState({redirect: true});
    } else {
      console.log("NOPE!");
    }
  }

  handleChange = (e) => {
    this.setState({words: e.target.value});
  }

  render() {
    console.log(this.state.words);
    if(this.state.redirect) {
      return (
        <Redirect to={{
          pathname: '/gen',
          state: { initNum: this.state.words }
        }}/>
      )
    } else {
      return (
        <div className='Home'>
          <h1>Am I done yet?</h1>
          <input
            type="number"
            placeholder="# of words"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}/>
        </div>
      )
    }
  }
}

export default Home;
