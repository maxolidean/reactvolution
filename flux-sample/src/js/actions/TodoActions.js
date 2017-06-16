import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}


export function deleteTodo(id) {
   dispatcher.dispatch({
     type: "DELETE_TODO",
     id,
   });
}

window.deleteTodo = deleteTodo;

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 113464613,
        text: "Aprender ReactJS",
        complete: true
      },
      {
        id: 235684679,
        text: "Aprender Flux",
        complete: true
      },
      {
        id: 235682379,
        text: "Aprender Redux",
        complete: false
      },
      {
        id: 8484848484,
        text: "Buscar trabajo en Lagash!",
        complete: false
      },
      {
        id: 6262627272,
        text: "Dar una charla en Facebook",
        complete: false
      },
    ]});
  }, 1000);
}

