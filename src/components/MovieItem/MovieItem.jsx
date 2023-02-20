import React from 'react';
import { Link, useLocation } from 'react-router-dom';



export const MovieItem = ({movie}) => {

    const { name, title, id } = movie;
    
const location = useLocation();
    return (
    <>
    
          <li >
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {title || name}
            </Link>
          </li>
            </>
            )
            

    
}