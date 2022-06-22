import { Link } from "react-router-dom"

import './styles.scss'

export function Film({id, image, title, subtitle, date}){
    return(
        <article className="card">
            <Link to={`film/${id}`}>
                <div className="card-image"><img src={image} alt={title} /></div>
                <div className="card-title">{title}</div>
                <div className="card-subtitle">{subtitle}</div>
            </Link>
        </article>
    )
}