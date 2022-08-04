import "./todoList.css";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useTodoContext } from "../../context/todo.context";
import useSound from 'use-sound';
import clap from '../../assets/cheer_2.wav';

const todoDefault = [
  {
    title: "This react app",
    done: true,
  },
  {
    title: "more questions",
    done: false,
  },
];

function TodoList() {
  const [todos, setTodos] = useState(todoDefault);
  const inputField = useRef(null);
  const {setConfetti} = useTodoContext();
  const [playClap] = useSound(
    clap,
    { volume: 1 }
  );

  const toggleStatus = useCallback((index) => {
    if (index <= -1) {
      return;
    }
    const newItem = [...todos];
    if(!newItem[index].done){
      setConfetti(true);
      playClap();
    }
    newItem[index].done = !newItem[index].done;
   
    setTodos([...newItem]);
  });

  const addTodo = useCallback((e) => {
    e.preventDefault();
    if (inputField?.current?.value) {
      const newItem = {
        title: inputField.current.value,
        done: false,
      };

      setTodos([...todos, newItem]);
      inputField.current.value = null;
    }
  });
  const clearList = useCallback(()=>{
    setTodos([]);
  })

  return (
    <div>
     
      <div className="todo-container">
        <div className="addmore">
          <h3> What do you need to do:</h3>
          <form
            onSubmit={(e) => {
              addTodo(e);
            }}
          >
            <div className="text-input">
              <input type="text" ref={inputField} />
            </div>
            <div className="col">
              
            </div>
            <button type="submit">Add</button>
            <button type="button" onClick={()=> {clearList()}}>Clear</button>
          </form>
          
        </div>
        <div className="list">
          <h3> Things you need to do :</h3>
          <ul>
            {todos.map((item, index) => (
              <li
                key={index}
                className={item.done ? "done" : "pending"}
                onClick={() => {
                  toggleStatus(index);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
