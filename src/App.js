import "./App.css";
import Tasks from "./components/tasks";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentId: 0,
    };
  }

  handleDelete = (taskId) => {
    const tasks = this.state.tasks.filter((c) => c.id !== taskId);
    this.setState({ tasks });
    // console.log("Event handler called", taskId);
  };

  handleDone = (taskId) => {
    const tasks = this.state.tasks.map((c) => {
      if (c.id === taskId) {
        const updatedItem = {
          ...c,
          isDone: true,
        };
        return updatedItem;
      } else {
        return c;
      }
    });
    this.setState({ tasks });
  };

  handleEdit = (taskId, title, description) => {
    if (title.length === 0 || description.length === 0) {
      alert("Title or description must not be empty");
    } else {
      const tasks = this.state.tasks.map((c) => {
        if (c.id === taskId) {
          const updatedItem = {
            ...c,
            title: title,
            description: description,
            isEditing: false,
          };
          return updatedItem;
        } else {
          return c;
        }
      });
      this.setState({ tasks });
    }
  };

  handleModify = (taskId) => {
    const tasks = this.state.tasks.map((c) => {
      if (c.id === taskId && !c.isDone) {
        const updatedItem = {
          ...c,
          isEditing: true,
        };
        return updatedItem;
      } else {
        const updatedItem = {
          ...c,
          isEditing: false,
        };
        return updatedItem;
      }
    });
    this.setState({ tasks });
  };

  handleAdd = (title, description) => {
    const tasks = this.stopEditing();
    // const tasks = this.state.tasks;

    if (title.length === 0 || description.length === 0) {
      alert("Title or description must not be empty");
    } else {
      this.setState({
        currentId: this.state.currentId + 1,
      });
      tasks.push({
        id: this.state.currentId,
        title: title,
        description: description,
        isEditing: false,
        isDone: false,
      });
      this.setState({ tasks });
    }
  };

  //Can be called in the delete and done functions also to stop current editing item
  stopEditing() {
    const tasks = this.state.tasks.map((c) => {
      const updatedItem = {
        ...c,
        isEditing: false,
      };
      return updatedItem;
    });
    return tasks;
  }

  render() {
    return (
      <div>
        <Tasks
          tasks={this.state.tasks}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
          onModify={this.handleModify}
          onDone={this.handleDone}
        />
      </div>
    );
  }
}

export default App;
