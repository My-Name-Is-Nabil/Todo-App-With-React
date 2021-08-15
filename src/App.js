import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App(props){
  
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState(props.todos);
  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const removeTodo = id => {
    setTodos(oldTodos => ({
      todos: oldTodos.todos.filter(todo => todo.id !== id),
      counter: oldTodos.counter,
    }));
  };
  const markAsCompleted = id => {
    setTodos(oldTodos => ({
      todos: oldTodos.todos.map(todo => {
        if (todo.id === id)
          return {...todo, completed: !todo.completed};
        return todo; 
      }),
      counter: oldTodos.counter,
    }));
  }
  
  const clearTodos = () =>{
    setTodos(oldTodos => ({
      todos: oldTodos.todos.filter(todo => !todo.completed),
      counter: oldTodos.counter,
    }));
  }

  const addTodo = inputEl => {
    const todo = inputEl.current.value;
    setTodos(oldTodos => ({
      todos: [...oldTodos.todos, {
        todo,
        id: oldTodos.counter,
        completed: false,
      }],
      counter: oldTodos.counter + 1,  
    }))
    inputEl.current.value = '';
  };
  
  const handleDragEnd = result => {
    if(result.destination === null)
      return;
    const items = Array.from(todos.todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(oldTodos => ({
      todos: items,
      counter: oldTodos.counter,
    }))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} changeTheme={changeTheme} />
      <AddTodo theme={theme} addTodo={addTodo} />
      <Todos theme={theme} todos={todos.todos} removeTodo={removeTodo} markAsCompleted={markAsCompleted} clearTodos={clearTodos} handleDragEnd={handleDragEnd}/>
    </div>
  );
}