import {NavLink} from "react-router-dom";
import "./NavigationBar.css"

export default function NavigationBar() {

    return (
        <nav className={"navigation-bar"}>
            <NavLink to={"/"} className={"Navi"}>Home</NavLink>
            <NavLink to={"/todos/open"}className={"Navi"}>Open</NavLink>
            <NavLink to={"/todos/in-progress"}className={"Navi"}>In Progress</NavLink>
            <NavLink to={"/todos/done"}className={"Navi"}>Done</NavLink>
        </nav>
    )
}