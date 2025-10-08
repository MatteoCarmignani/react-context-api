// import della parte di componenti di navigazione per routing
import { NavLink } from "react-router-dom";


const MainNavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home Page</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Chi siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/product">I nostri Prodotti</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default MainNavBar