import React from "react";
import { useState } from "react";
import { useTodoContext } from "../../store/TodoProvider";
import styled from "styled-components";
const Counter = () => {

  const { AddNewTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const inputTitle = (event) => {
    setTodoItem(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    AddNewTodo(todoItem);
    setTodoItem("");
   return;
  };

  return (
    <ContainerForm>
      <h1>Todo List</h1>
      <input onChange={inputTitle} value={todoItem} />
      <button type="submit" onClick={submitHandler}>Add</button>
    </ContainerForm>
  );
};

const ContainerForm = styled.form`
  width: 400px;
  height: 130px;
  border-radius: 20px;
  margin: 0 auto;
  background-color: white;
  -webkit-box-shadow: -8px 8px 61px 33px rgba(231, 231, 231, 0.2);
-moz-box-shadow: -8px 8px 61px 33px rgba(231, 231, 231, 0.2);
box-shadow: -8px 8px 61px 33px rgba(231, 231, 231, 0.2);


  & h1{
    color: teal;
  }

  & button {
    border: 2px solid teal;
    margin-left: 20px;
    width: 80px;
    border-radius: 10px;
    padding: 2px 5px;
    color: #4b8080;
  }


  & input{
   border:  2px solid teal;
   border-radius:  9px;
  }
`;

export default Counter;
