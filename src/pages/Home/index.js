import { useEffect, useState } from "react"
import { Film } from "../../components/Film";
import { Search } from "../../components/Search";

import './styles.scss'

export function Home(){

    const [ films, setFilm ] = useState([]);
    const [ search, setSearch ] = useState([]);

    useEffect(() => {
        async function getFilm(){
            const response = await fetch('https://ghibliapi.herokuapp.com/films/');
            const data = await response.json();
            setFilm(data)
        }
        getFilm();
    }, [])

    const filteredFilms = films.filter( film => film.title.toLowerCase().includes(search))
    
    function getSearchValue(e){
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    
    return(
        <main className="home">
            <Search 
                total={filteredFilms.length}
                search={getSearchValue}
            />
            <div className="container">
                {filteredFilms.map( film =>
                    <> 
                    <Film 
                        key={film?.id}
                        id={film.id}
                        image={film.image}
                        title={film.title}
                        subtitle={film.original_title}
                    />
                    </>
                )}
            </div>
        </main>
         

    )
}