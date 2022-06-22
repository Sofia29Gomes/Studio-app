import { BsFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/ai";

import './styles.scss'

export function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="icons">
                    <a href="https://www.facebook.com/GhibliUSA/" target="blank">
                        BsFacebook
                    </a>
                    <a href="https://www.instagram.com/ghibliusa/" target="blank">
                        icon
                    </a>
                </div>
            </div>
        </footer>
    )
}