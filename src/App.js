import Overview from "./components/Overview";
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      taskNumber: 1,
      tasks: [],
    };
  }

  updateInput = (e) => {
    this.setState((state, props) => ({
      text: e.target.value,
    }));
  };

  addTask = (e) => {
    e.preventDefault();
    this.setState((state, props) => ({
      tasks: state.tasks.concat({
        task: state.text,
        id: state.taskNumber,
        isEdited: false,
      }),
      text: "",
      taskNumber: state.taskNumber + 1,
    }));
  };

  deleteTask = (which) => {
    this.setState({
      tasks: this.state.tasks.filter((item) => item.id !== which),
    });
  };

  editTask = (which) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === which) item.isEdited = true;
        return item;
      }),
    });
  };

  submitTask = (givenText, id) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === id) {
          item.isEdited = false;
          item.task = givenText;
        }
        return item;
      }),
    });
  };

  render() {
    const { tasks, text } = { ...this.state };
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label htmlFor="textInput">Enter task: </label>
          <input
            id="textInput"
            type="text"
            value={text}
            onChange={this.updateInput}
          ></input>
          <button type="submit">Add</button>
        </form>
        <Overview
          tasks={tasks}
          deleteFunction={this.deleteTask}
          editFunction={this.editTask}
          submitFunction={this.submitTask}
        />
      </div>
    );
  }
}

export default App;
