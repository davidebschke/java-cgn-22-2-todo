import React, {} from 'react';
import './App.css';
import './NavigationenBar.css';
import ToDoList from "./toDoList";
import InProgress from "./InProgress";
import ToDoDone from "./toDoDone";
import BoardOverview from "./components/BoardOverview";

import AddTodo from "./components/AddTodo";
import useTodos from './useTodos';
import {HashRouter, NavLink, Route, Router} from "react-router-dom";


function App() {


    const {todos, deleteTodo, advanceTodo, addTodo} = useTodos();

    return (<HashRouter>
            <div>
                <NavLink to={"/Home"}>Home</NavLink>
                <NavLink to={"/ToDO"}>toDOs</NavLink>
                <NavLink to={"/INProgress"}>InProgress</NavLink>
                <NavLink to={"/Done"}>Done</NavLink></div>


            <Route path={"/home"} element={<App/>}/>
            <Route path={"/to-do"} element={<ToDoList/>}/>
            <Route path={"/in-progress"} element={<InProgress/>}/>
            <Route path={"/done"} element={<ToDoDone/>}/>


            <div>
                <BoardOverview todos={todos} advanceTodo={advanceTodo} deleteTodo={deleteTodo}/>
                <AddTodo addTodo={addTodo}/>
            </div></HashRouter>

    );
}

export default App;
