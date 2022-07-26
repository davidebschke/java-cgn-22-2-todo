import React, {} from 'react';
import './App.css';

import BoardOverview from "./components/BoardOverview";

import AddTodo from "./components/AddTodo";
import useTodos from './useTodos';


function App() {


    const {todos,deleteTodo,advanceTodo,addTodo} = useTodos();

  return (
    <div>
        <BoardOverview todos={todos} advanceTodo={advanceTodo} deleteTodo={deleteTodo}/>
        <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
