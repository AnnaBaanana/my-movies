import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <NavLink to="/" exact> Home </NavLink>
            <NavLink to="/movies" exact> Movies </NavLink>
            <NavLink to="/movies/add" exact> MovieForm </NavLink>
        </nav>
    )
}

export default NavBar;