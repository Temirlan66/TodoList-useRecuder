import { useContext, useReducer } from "react";
import { createContext } from "react";

const initialTodoListState = {
  todos: [
    // { id: 1, text: "pubg", complete: false },
    // { id: 2, text: "fifa", complete: false },
  ],
};

const TodoContext = createContext();

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "AddNewTodo": {
      const newTodo = {
        id: Math.random() + 1,
        text: action.text,
        complete: false,
      };
      return {
        todos: [...state.todos, newTodo],
      };
    }
    case "UpdatePosts": {
      const id = state.todos.findIndex((el) => el.id === action.id);
      const list = Object.assign({}, state.todos[id]);
      list.text = action.text;
      const todos = Object.assign([], state.todos);
      todos.splice(id, 1, list);
      return {
        todos: todos,
      };
    }
    case "DeletePosts": {
      const deleteTodos = state.todos.filter((el) => el.id !== action.id);
      return {
        todos: deleteTodos,
      };
    }

    case "CompletePosts": {
      const completedTodo = state.todos.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: !item.complete };
        }

        return item;
      });

      return { ...state, todos: completedTodo };
    }

    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(TodoReducer, initialTodoListState);

  const DeletePosts = (id) => dispatch({ type: "DeletePosts", id: id });
  const CompletePosts = (id, complete) =>
    dispatch({ type: "CompletePosts", id: id, complete: complete });

  const UpdatePosts = (text, id) =>
    dispatch({ type: "UpdatePosts", id: id, text: text });

  const AddNewTodo = (text) => dispatch({ type: "AddNewTodo", text: text });

  const contextValue = {
    state: todoList.todos,
    DeletePosts,
    CompletePosts,
    UpdatePosts,
    AddNewTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
