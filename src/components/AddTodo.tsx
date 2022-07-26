import {ChangeEvent, FormEvent, useState} from "react";
import Popup from "reactjs-popup";
import {toast} from "react-toastify";

type AddTodoProps = {
    addTodo: (description: string) => void
}

export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const onTodoSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        props.addTodo(description)


        setDescription("")

    }
    return (
        <form onSubmit={onTodoSubmit}>
            <input onChange={onDescriptionChange} value={description}/>
            <button type={"submit"}> Add</button>
        </form>
    )
}