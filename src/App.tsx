import React, {} from 'react';
import './App.css';
import './NavigationenBar.css';
import ToDoList from "./toDoList";
import InProgress from "./InProgress";
import ToDoDone from "./toDoDone";
import {BoardOverview} from "./components/BoardOverview";
import BoardPage from "./components/BoardPage";
import NavigationBar from "./components/NavigationBar";
import AddTodo from "./components/AddTodo";
import useTodos from './useTodos';
import {HashRouter, NavLink, Route, Router, Routes,} from "react-router-dom";


function App() {



    const {todos, deleteTodo, advanceTodo, addTodo} = useTodos();

    return (


        <HashRouter>
            <h1>Super Todo App with Routes</h1>
            <NavigationBar/>
            <Routes>
                <Route path={"/"}
                       element={<BoardOverview
                           todos={todos}
                           advanceTodo={advanceTodo}
                           deleteTodo={deleteTodo}/>}/>
                <Route path={"/todos/open"} element={<BoardPage
                    todos={todos}
                    status={"OPEN"}
                    advanceTodo={advanceTodo}
                    deleteTodo={deleteTodo}
                />
                }/>
                <Route path={"/todos/in-progress"} element={<BoardPage
                    todos={todos}
                    status={"IN_PROGRESS"}
                    advanceTodo={advanceTodo}
                    deleteTodo={deleteTodo}
                />
                }/>
                <Route path={"/todos/done"} element={<BoardPage
                    todos={todos}
                    status={"DONE"}
                    advanceTodo={advanceTodo}
                    deleteTodo={deleteTodo}
                />
                }/>
            </Routes>
            <AddTodo addTodo={addTodo}/>
        </HashRouter>







    );}


export default App;
