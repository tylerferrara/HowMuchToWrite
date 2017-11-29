import React, { Component } from 'react';
import Ipsum from 'lorem-ipsum';

class Gen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      words: null,
      text: "",
      output: []
    }
  }

  componentWillMount() {
    let words = this.props.location.state.initNum;
    if(words > 0) {
      const text = Ipsum({
        count: words,
        units: 'words',
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        paragraphLowerBound: 3,
        paragraphUpperBound: 7,
        format: 'plain'
      });
      this.setState({words});
      console.log(text);
    }

  }

  render() {
    console.log(this.state.words);
    return (
      <div className="Gen">
        <h1>GEN TIME!</h1>
        {this.state.output}
      </div>
    )
  }
}

export default Gen;
