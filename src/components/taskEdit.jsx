import React, { Component } from "react";

class TaskEdit extends Component {
  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold",
  //   color: "black",
  // };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.task.title,
      description: this.props.task.description,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
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

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          className='form-control'
          style={{ margin: 10 }}
          type='text'
          id='title'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleInput}
        />
        <textarea
          className='form-control'
          style={{ margin: 20 }}
          name='Description'
          placeholder='Description'
          value={this.state.description}
          onChange={this.handleTextArea}
        />
        <button
          onClick={() =>
            this.props.onEdit(
              this.props.task.id,
              this.state.title,
              this.state.description
            )
          }
          className='btn btn-secondary btn-sm m-2'
        >
          Edit
        </button>
      </div>
    );
  }
}

export default TaskEdit;
