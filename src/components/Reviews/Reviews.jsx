import { getReviews } from '../../services/services'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const [movieReview, setMovieReview] = useState([]);
    const {movieId} = useParams()
    useEffect(() => {
    getReviews(movieId).then(data => {
      setMovieReview(data.results);
    });
    }, [movieId]);
    

    return (
      <>
      {movieReview.length ? (
        <ul>
          {movieReview.map(movie => {
            return (
              <li key={movie.id}>
                <h4>Author: {movie.author}</h4>
                <p>{movie.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </>
    )
}
export default Reviews