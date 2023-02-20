
import { getCredits } from '../../services/services'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';







const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
    getCredits(movieId).then(data => {
      setMovieCast(data.cast);
    });
  }, [movieId]);

    return (
       <>
      <ul>
        {movieCast &&
          movieCast.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                alt={item.name}
                width="180px"
              />
              <p>{item.name}</p>
              <p>Character:{item.character}</p>
            </li>
          ))}
            </ul>
            
    </>
    )

}
export default Cast 