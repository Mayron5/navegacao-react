import './Menu.css'

import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu;