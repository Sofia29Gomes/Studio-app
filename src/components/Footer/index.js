import { Icon } from '@iconify/react';

import './styles.scss'

export function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="icons">
                    <a href="https://www.facebook.com/GhibliUSA/" target="blank">
                        <Icon icon="tabler:brand-facebook" color="white" />
                    </a>
                    <a href="https://www.instagram.com/ghibliusa/" target="blank">
                        <Icon icon="tabler:brand-instagram" color="white" />
                    </a>
                </div>
            </div>
        </footer>
    )
}