import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import '../css/TodoApp.css';
import Todolist from './TodoList';

injectTapEventPlugin();

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      newListName: '',
      openMessage: false,
      message: '',
    };
    this.handleCreateList = this.handleCreateList.bind(this);
    this.handleChangeListName = this.handleChangeListName.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleCreateList(e) {
    let lists = this.state.lists;
    const n = this.state.newListName;
    if (e.key === 'Enter' && n !== '') {
      const newList = {
        listName: n,
        todoItem: [],
      };
      lists = lists.concat(newList);
      this.setState({
        lists,
        newListName: '',
        openMessage: true,
        message: `${n} todo-list created`,
      });
    }
  }

  handleChangeListName(e) {
    const value = e.target.value;
    this.setState({
      newListName: value,
    });
  }

  handleRequestClose() {
    this.setState({
      openMessage: false,
      message: '',
    });
  }

  render() {
    return (
      <div className="TodoApp">
        <div>
          <h1>TODO</h1>
        </div>
        <TextField
          hintText="New List"
          value={this.state.newListName}
          onChange={this.handleChangeListName}
          onKeyUp={this.handleCreateList}
        />
        <Snackbar
          open={this.state.openMessage}
          message={this.state.message}
          autoHideDuration={1500}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default TodoApp;
