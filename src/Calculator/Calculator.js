import React, { Component } from 'react';
import User from './Userip/Userip'
import Res from './Userip/Userop'
import './Calc.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      result: ""
  }
}
onClick = button => {

  if(button === "="){
      this.calculate()
  }

  else if(button === "C"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      this.setState({
          result: this.state.result+button
      })
  }
};

calculate = () => {
  var checkResult = ''
      checkResult = this.state.result

  try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(checkResult) || "" ) + ""
      })
  } catch (e) {
      this.setState({
          result: "error"
      })

  }
};
reset = () => {
  this.setState({
      result: ""
  })
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};

  
  render(){
    return (
        <div className="App">
            <h1 id="p">Calculator</h1>
            <Res
            result={this.state.result}>
            
            </Res>
            <User
            onClick={this.onClick}>
            </User>
            
        </div>
    );
  }
}
export default App;
