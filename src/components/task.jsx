import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <span
            style={{
              width: 250,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {this.props.task.title}
          </span>

          <div
            style={{
              marginLeft: 30,
            }}
          >
            <button
              onClick={() => this.props.onDelete(this.props.task.id)}
              className='btn btn-danger btn-sm m-2'
            >
              Delete
            </button>
            {!this.props.task.isDone && (
              <React.Fragment>
                <button
                  onClick={() => this.props.onModify(this.props.task.id)}
                  className='btn btn-secondary btn-sm m-2'
                >
                  Edit
                </button>
                <button
                  onClick={() => this.props.onDone(this.props.task.id)}
                  className='btn btn-success btn-sm m-2'
                >
                  Done
                </button>
              </React.Fragment>
            )}
            {this.props.task.isDone && (
              <span className='badge rounded-pill bg-success'>Resolved</span>
            )}
          </div>
        </div>
        <span
          style={{
            display: "flex",
            width: 250,
          }}
        >
          {" "}
          {this.props.task.description}{" "}
        </span>
      </div>
    );
  }
}

export default Task;
