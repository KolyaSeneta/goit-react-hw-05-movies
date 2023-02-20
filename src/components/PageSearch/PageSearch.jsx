import  { useState, useEffect} from "react"
import { getSearch } from "../../services/services"
import { MovieItem } from "../MovieItem/MovieItem"
import { useSearchParams } from "react-router-dom"
import css from '../PageSearch/PageSearch.module.scss'



const PageSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
     const quary = searchParams.get('quary')
    const [movieName, setMovieName] = useState(quary || '')
    const[movieSearch, setMovieSearch]=useState(null)
    const HandleSumbit = e => {
        e.preventDefault();
        setSearchParams({quary: movieName})
    }
    useEffect(() => {
        getSearch(quary).then(setMovieSearch)
    },[quary])
 
    return (
            <div className={css.container}>
            <form className={css.search} onSubmit={HandleSumbit}>
                <input
                    className={css.input}
                    type="text"
                    required
                    minLength={3}
                    name="movieName"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                    placeholder="Search movie..."
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
            <ul>
        {movieSearch?.map(movie=> (
          <MovieItem  key={movie.id} movie={movie}/>
        ))}
            </ul>
            </div>
        )
    }

export default PageSearch

  