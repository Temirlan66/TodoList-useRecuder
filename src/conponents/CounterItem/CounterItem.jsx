import React, { useState } from "react";
import styled from "styled-components";
import { useTodoContext } from "../../store/TodoProvider";

const CounterItem = ({ todo }) => {
  const { UpdatePosts, CompletePosts, DeletePosts } = useTodoContext();

  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  const enabled = text.trim().length > 0;

  return (
    <Container>
      {mode === "list" ? (
        <>
          {todo.complete ? (
            <TodoText
              style={{ textDecoration: "line-through" }}
              className="TodoText"
            >
              {todo.text}
            </TodoText>
          ) : (
            <TodoText className="TodoText">{todo.text}</TodoText>
          )}
          {todo.complete ? (
            <button
              className="CompleteTodo"
              color="blue"
              onClick={() => CompletePosts(todo.id)}
            >
              UnComplete
            </button>
          ) : (
            <button
              style={{ background: "teal" }}
              onClick={() => CompletePosts(todo.id)}
            >
              Complete
            </button>
          )}
          <button
            style={{ background: "blue" }}
            onClick={() => setMode("edit")}
          >
            Update
          </button>
          <button
            style={{ background: "red" }}
            color="red"
            onClick={() => DeletePosts(todo.id)}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <EditInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="EditTodoInput"
          />
          <button
            disabled={!enabled}
            onClick={() => {
              UpdatePosts(text, todo.id);
              setMode("list");
            }}
          >
            Add
          </button>
          <button
            style={{ background: "red" }}
            color="red"
            onClick={() => setMode("list")}
          >
            Cancel
          </button>
        </>
      )}
    </Container>
  );
};

export default CounterItem;

const TodoText = styled.p`
  font-size: 22px;
  font-weight: 700;
  width: 90%;
`;

const EditInput = styled.input`
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;

const Container = styled.div`
  border: 2px solid;
  border-radius: 12px;
  width: 400px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 10px;
  border: 3px solid teal;
  color: teal;
  background-color: white;

  & button {
    background-color: teal;
    margin-left: 10px;
    border: none;
    border-radius: 20px;
    color: white;
    width: 90px;
    height: 30px;
  }
`;
