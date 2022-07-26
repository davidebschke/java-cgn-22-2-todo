import {useEffect, useState} from "react";
import {Todo} from "./model/Todo";
import axios from "axios";
import {getNextStatus} from "./service/todo-service";


export default function useTodos() {


    const [todos, setTodos] = useState<Todo[]>([]);             // erstelle das Objekt todos und nehme die funktion setTodos
                                                                            // setze diese mit useState auf ein leeres Array

    useEffect(() => {                                                   // führe das in der geschweiften klammer aus
        getAllTodo()                                         // ausführen der Funktionen
    }, [])                                            // nur einmal bei leeren klammern oder bedingung in den Klammern

    const getAllTodo = () => {
        axios.get("/api/todo")                                           // hole dir die todos vom backend
            .then((response) => response.data)            // belege response mit daten aus den todos( antwort vom Backend)
            .then(setTodos)                                                  // setze die Response vom backend als neuen Inhalt von todos
    }

    const addTodo = (description: string) => {
        const newTodo = {
            description: description,
            status: "OPEN"
        }

        axios.post("/api/todo", newTodo)
            .then(getAllTodo)
    }

    const advanceTodo = (todo: Todo) => {
        const updatedTodo = {
            id: todo.id,
            description: todo.description,
            status: getNextStatus(todo.status)
        }

        axios.put(`/api/todo/${todo.id}`, updatedTodo)
            .then(getAllTodo)
    }

    const deleteTodo = (id: string) => {
        axios.delete(`/api/todo/${id}`)
            .then(getAllTodo)


    }

    return {todos, deleteTodo, advanceTodo, addTodo}

}