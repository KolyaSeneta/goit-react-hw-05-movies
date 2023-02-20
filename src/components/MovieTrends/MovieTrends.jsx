import { useEffect, useState } from 'react';
import {getTrending} from '../../services/services'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {MovieItem} from '../MovieItem/MovieItem'

const MovieTrends = () => {
      //  const [movie, setMovie] = useState([])
  const [trendsMovie, setTrendsMovie] = useState([])

      
//     const handleAddMovie = (movie) => {
//         setMovie((prev) => ({  moviesList:[...prev.moviesList, movie]
//      }))
//  }
     
    useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getTrending();
        if (data.results.length) {
          setTrendsMovie(data.results);
        }
      } catch (error) {
        console.log(error);
        Notify.failed('There is no such film yet');
      }
    };
    fetchMovie();
  }, []);
    


    return(
        <ul>
        {trendsMovie.map(movie => (
          <MovieItem  key={movie.id} movie={movie}/>
        ))}
      </ul>
    )
}

export default MovieTrends