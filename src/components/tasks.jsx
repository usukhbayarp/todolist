import React, { Component } from "react";
import Task from "./task";
import TaskEdit from "./taskEdit";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleTextArea(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleAddItem() {
    this.props.onAdd(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: "",
    });
  }

  render() {
    const { tasks, onDelete, onEdit, onModify, onDone } = this.props;
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            className='form-control'
            style={{ width: "20%", margin: 40 }}
            aria-describedby='addon-wrapping'
            type='text'
            id='title'
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            className='form-control'
            style={{ width: "20%", margin: 20 }}
            name='Description'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleTextArea}
          />
          <button
            onClick={this.handleAddItem}
            className='btn btn-primary btn-sm m-2'
          >
            Add
          </button>
        </div>
        <div
          style={{
            width: "30%",
            marginLeft: 100,
          }}
        >
          <ul className='list-group'>
            {tasks.map(function (task) {
              return task.isEditing ? (
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <TaskEdit key={task.id} onEdit={onEdit} task={task} />
                </li>
              ) : (
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <Task
                    key={task.id}
                    onDelete={onDelete}
                    task={task}
                    onModify={onModify}
                    onDone={onDone}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tasks;
