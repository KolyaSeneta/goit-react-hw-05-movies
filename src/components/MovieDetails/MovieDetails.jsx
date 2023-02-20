import  GoBack  from "../GoBack/GoBack"
import { Link,useLocation, useParams, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'
import {getDetails} from '../../services/services'



const MavieDetails = () => {
      const [movieData, setMovieData] = useState(null);
     const { movieId } = useParams();
     const location = useLocation();
    useEffect(() => {
    getDetails(movieId).then(data => {
      setMovieData(data);
    });
  }, [movieId]);
 console.log(movieData);
    return (
        <>
            <GoBack />
            
            
                {movieData && (
                    <section>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title || movieData.original_title} width="300px" />
                
                <div>
                    <h2>{movieData.title || movieData.original_title}</h2>
                    <p>User score:{Math.floor(movieData.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{ movieData.overview}</p>
                    <h3>Genres</h3>
                    <p>{ movieData.genres.map(item => item.name ).join(", " )}</p>
                    </div>
                    </section>
                 )}
                <div>

                    <h3>Additional information</h3>
                    <ul>
                        <li>
                             <Link  to="cast" state={{ from: location.state?.from }}>Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
                        </li>
                </ul>
                 <Outlet />
                </div>

           
        </>
    )
}

export default MavieDetails