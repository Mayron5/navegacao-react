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
                    <li>
                        <Link to="/param/1">Parm 01</Link>
                    </li>
                    <li>
                        <Link to="/param/60">Parm 02</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Nao existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu;