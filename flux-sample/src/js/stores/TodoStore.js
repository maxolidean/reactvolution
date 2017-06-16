import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Aprender ReactJS",
        complete: false
      },
      {
        id: 235684679,
        text: "Aprender Flux",
        complete: false
      },
      {
        id: 235682379,
        text: "Aprender Redux",
        complete: false
      }
    ];
  }

createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  deleteTodo(id) {
        this.todos = this.todos.filter((t) => t.id != id);
        this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
      } 
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
