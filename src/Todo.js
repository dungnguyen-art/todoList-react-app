import React, { useContext, useRef, useState, useEffect, useMemo, useCallback, memo } from "react";
import { ThemeContext } from "./App";
function TodoList() {
  console.log("TodoList - Re-rendering.....");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newTime, setTime] = useState('');
  const inputRef = useRef(null);
  const xRef = useRef(5);
  console.log('X: ', xRef.current);
  xRef.current += 1; 
  console.log('X+1: ', xRef.current);


  useEffect(() => {
    // console.log("useEffect 1: Re-rendering...")
    // Lấy danh sách todo từ local storage khi component được tạo
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    // console.log("useEffect 2: Re-rendering...")
    // Lưu danh sách todo vào local storage khi todos thay đổi
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  // Focus vao DOM element.
  useEffect(() => {
    // console.log("useEffect 3: Re-rendering...")
    inputRef.current.focus();
  }, []);

  const handleTodo = () => {
    // console.log("useCallback 1: Re-rendering...")
      setTodos([...todos,{
        newTodo,
        newTime: +newTime
      }]) // có dùng state theo hàm.
      
    };

  const removeTodo = (index) => {
    // console.log("removeTodo 1: Re-rendering...")
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const total = useMemo(() => {
    
    const result = todos.reduce((result, todo) => {
      console.log('useMemo: Tinh toan lai...')
      return result + todo.newTime
    }, 0)
    return result;
  },[todos])

  const theme = useContext(ThemeContext)

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Thêm công việc mới"
          ref={inputRef}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input
          type="Number"
          placeholder="Bao lâu để hoàn thành"
          value={newTime}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleTodo}>Thêm</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.newTodo}: {todo.newTime} Phút
              <button onClick={() => removeTodo(index)}>Xóa</button>
            </li>
          ))}
        </ul>
        <br/>
      </form>
      <p className={theme}>Tổng: {total} Phút</p> 
      
    </div>
  );
}

export default TodoList;
