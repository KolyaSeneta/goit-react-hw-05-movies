import { useEffect, useState } from 'react';
import {getTrending} from '../../services/services'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Link, useLocation } from "react-router-dom"

const MovieTrends = () => {
       const [movie, setMovie] = useState([])

      
//     const handleAddMovie = (movie) => {
//         setMovie((prev) => ({  moviesList:[...prev.moviesList, movie]
//      }))
//  }
     
    useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getTrending();
        if (data.results.length) {
          setMovie(data.results);
        }
      } catch (error) {
        console.log(error);
        Notify.failed('There is no such film yet');
      }
    };
    fetchMovie();
  }, []);
    

const location = useLocation();
    return(
        <ul>
        {movie.map(item => (
          <li key={item.id}>
            <Link state={{ from: location }} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}

export default MovieTrends