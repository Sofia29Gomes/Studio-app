import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './styles.scss'

export function Film() {
    
    const { id } = useParams();
    const [film, setFilm] = useState([]);

    useEffect(() => {
        async function getFilm(){
            const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            const data = await response.json()
            setFilm(data)
        } 
    getFilm()
    }, [id])

    return(
    <div className="film-container">
        
        <div className="film-image">
            <div className="film-banner">
                <img width="700"src={film?.movie_banner} alt={film?.title}></img>
            </div>
        </div>
       
        <div className="film-main">
            <div className="film-name">
                    <h1>{film?.title}</h1>
                    <h4>{film?.rt_score}/100</h4>
            </div>

            <div className="film-subtitle">
                <h3>{film?.original_title}</h3>
            </div>

            <div className="film-date">
                <h4>{film?.release_date} | {film.running_time}m</h4>
            </div>


            <div className="film-card">
                <div className="film-director">
                    <h4>Director</h4>
                    <p>{film?.director}</p>
                </div>

                <div className="film-producer">
                    <h4>Producer</h4>
                    <p>{film?.producer}</p>
                </div>
            </div>


            <div className="film-description">
                {film?.description}
            </div>
     

        </div>
    </div>
        )
        
}