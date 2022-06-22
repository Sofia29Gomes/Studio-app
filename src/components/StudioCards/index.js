import { Film } from "../Film";

import './styles.scss';

export function StudioCards({films}){
    return(
        <div className="films-container">
            <div className="films-body">
                <Film />
            </div>
        </div>

    
    )
}