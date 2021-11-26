import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/UseState">Sobre nós</Link>
                </li>
                <li>
                    <Link to="/UseEffect">Produtos</Link>
                </li>
                <li>
                    <Link to="/UseContext">Detalhes</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu