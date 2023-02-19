import { useEffect, useState } from 'react';
import {getTranding} from '../../services/services'

const MovieTrends = () => {
       const [movies, setMovies] = useState([])

      
//     const handleAddMovie = (movie) => {
//         setMovie((prev) => ({  moviesList:[...prev.moviesList, movie]
//      }))
//  }
    useEffect(() => {
        console.log(getTranding()); 
        
 },[])

    return (
        <>
            <ul>
              { movies.map(movie =>(<li key={movie}></li>) )}
            </ul>
        </>
    )
}

export default {MovieTrends}