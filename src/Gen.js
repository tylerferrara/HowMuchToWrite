import React, { Component } from 'react';
import Ipsum from 'lorem-ipsum';

class Gen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      words: null,
      text: null,
      output: []
    }
  }

  componentWillMount() {
    let words = this.props.location.state.initNum;
    if(words > 0) {
      console.log("LETS INIT!!!!");
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
      this.setState({text});
    }
    console.log(this.state.text);

    // this.paragraphGen();
  }

  paragraphGen() {
    let collection = this.state.text.split(" ");
    let tempOutput = [];
    let WPS = null;
    let str;

    while(collection.length > 0) {
      str = "";
      WPS = Math.round(5 + Math.random() * 10);
      if(collection.length < WPS) {
        collection.forEach(word => {
          str += (word + " ");
        })
         // <FIX THIS
        collection = ""; // collection is done
      } else {
        collection.splice(0, WPS).forEach(word => {
          str += (word + " ");
        });
      }
      tempOutput.push(<p>{str + "."}</p>);
    }
    this.setState({output: tempOutput})
  }

  render() {
    console.log(this.state.output);
    return (
      <div className="Gen">
        <h1>GEN TIME!</h1>
        {this.state.output}
      </div>
    )
  }
}

export default Gen;
