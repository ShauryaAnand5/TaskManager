import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { AddToDo } from './Components/AddToDo';
import { About } from './Components/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("Task Added", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno,
      title,
      desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <BrowserRouter>
        <Header title="My Task Manager" searchBar={false} /> {/* Passing data from parent to child */}
        <Routes>
          <Route exact path="/" element={
            <>
              <AddToDo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


