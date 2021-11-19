import React from "react";

export default class EyesOnMe extends React.Component {
    
    state = {
        text: "Next"
      }

    changeText = (newText) => {
      this.setState({text: newText }); 
    }
    
    render() {
    let { text } = this.state;
      return <button value={'this'}
      onFocus={() => {
        console.log('Good!');
        this.changeText('Good!') 
      }}
      onBlur={() => {
        console.log('Hey! Eyes on me!');
        this.changeText('Hey! Eyes on me!')
      }}
      >{text}</button>;
    }
  }