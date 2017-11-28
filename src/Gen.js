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
      this.sentenceGen(text);
    }

  }

  sentenceGen(text) {
    let collection = text.split(" ");
    let textList = [];
    let WPS = null;
    let str;

    while(collection.length > 0) {
      str = "";
      WPS = Math.round(5 + Math.random() * 20);
      if(collection.length < WPS) {
        collection.forEach((word, index) => {
          if(index === 0) {
            str += word.charAt(0).toUpperCase() + word.slice(1);
          } else {
            str += (" " + word);
          }
        })
         // <FIX THIS
        collection = ""; // collection is done
      } else {
        collection.splice(0, WPS).forEach((word, index) => {
          if(index === 0) {
            str += word.charAt(0).toUpperCase() + word.slice(1);
          } else {
            str += (" " + word);
          }
        });
      }
      textList.push(str + ". ");
    }
    this.paragraphGen(textList);
  }

  paragraphGen(textList) {
    let tempList = textList;
    let tempP = "";
    let blocks = [];
    let SPP;
    let id = 0;
    while(tempList.length > 0) {
      SPP = Math.round(4 + Math.random() * 8);
      if(SPP > tempList.length) {
        tempList.forEach(s => {
          tempP += s;
        });
        tempList = [];
      } else {
        for(let i = 0; i < SPP; i++) {
          tempP += tempList[i];
          tempList = tempList.slice(1);
        }
      }
      blocks.push(<p key={id}>{tempP}</p>)
      id++;
      tempP = "";
    }
    this.setState({output: blocks});
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
