import React, { Component } from 'react';
import './Todo.css';
class App extends Component {
  state={
    task:'',
    taskList:[],
  };
  inputChangeHandler = (input)=>{
      this.setState({
        task: input
      });
  }
  btnAddHandler = (inputTask)=>{
    let item = {
      value: inputTask,
      done: false,
      edit: false
    }
    let newList = [
      ...this.state.taskList,
      item
    ]
    this.setState({
      taskList:newList,
      task: ''
    })
  }
  btnDeleteHandler = (itemIndex) =>{
    this.state.taskList.splice(itemIndex, 1);
    this.setState({taskList: this.state.taskList});
  }
  btnDoneHandler = (itemIndex) =>{
    let newList = this.state.taskList.map((todo, index) => {
      if(index === itemIndex) {
        return {
          ...todo,
          done: true
        }
      } else {
        return todo
      }
    })
    this.setState({
        taskList : newList,
    })
   
  }
  editHandler = (itemIndex, boolean) => {
   
    let newList = this.state.taskList.map((todo, index) => {
      if(index === itemIndex) {
        return {
          ...todo,
          edit: true
        }
      } else {
        return todo
      }
    })
    this.setState({
        taskList : newList,
    })
  }
  render() {
    
    return (
      <div className="App">
          <div id="head">
          <h1 className="App-title">To Do App</h1>
            <input
                type="text"
                className="inputTask"
                placeholder="Add your task"
                onChange={(event) => this.inputChangeHandler(event.target.value)}
                value ={this.state.task}
                />
            <button id="btn1"
                type="submit"
                className="submitBtn"
                onClick={()=> this.btnAddHandler(this.state.task)} >Add</button>
            </div>
            <div>
              {this.state.taskList.map((todo,index) =>
              <div id="body"
                    style={{textDecoration: this.state.taskList[index].done ? 'line-through' : 'none', }}>
                <div contentEditable= {this.state.taskList[index].edit ? "true" : "false"}
                    style={{width:'300px'}}> {todo.value} </div>
                <div >
                <button id="i1"
                      className="outputBtns"
                      onClick={() => this.btnDoneHandler(index)} > Done</button>
                 <button id="i2"
                      className="outputBtns"
                      onClick={(event) => this.editHandler(index, true)}> Edit</button>
                <button id="i3"
                      className="outputBtns"
                      onClick={(event) => this.btnDeleteHandler(index)} >Delete</button>
                    </div>
               </div>)}
            </div>
          </div>
    );
  }
}
export default App