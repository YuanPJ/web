import React, { Component } from 'react';
import '../css/TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.content.listName,
    };
  }
  render() {
    return (
      <div>
        {this.state.title}
      </div>
    );
  }
}

export default TodoList;
