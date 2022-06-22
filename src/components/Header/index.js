import logo from "./logo.png"
import { Link } from 'react-router-dom'

import './styles.scss'

export function Header(){
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="STUDIO GHIBLI"></img>
                </Link>
            </div>
        </header>
    )
}