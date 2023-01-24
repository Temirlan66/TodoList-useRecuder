import React from "react";
import { useTodoContext } from "../../store/TodoProvider";
import CounterItem from "../CounterItem/CounterItem";
// import styled from "styled-components";

const CounterList = () => {
  const { state } = useTodoContext();
  console.log(state);

  return (
    <>
      {state.map((todo, index) => (
        <CounterItem todo={todo} key={index} />
      ))}
    </>
  );
};

// const StyledPosts = styled.ul`
//   width: 400px;
//   height: 50px;
//   margin: 0 auto;
//   background-color: white;
//   margin-top: 30px;
//   border-radius: 20px;
//   display: flex;
//   border: 3px solid teal;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   color: teal;

//   & button {
//     border: 2px solid teal;
//     margin-left: 20px;
//     width: 80px;
//     border-radius: 10px;
//     padding: 2px 5px;
//     color: #4b8080;
//   }
// `;
export default CounterList;
