import React, {useState} from "react"




const PageSearch = () => {

    // const [state, setState] = useState({
    //     name: "",

    // })
    const [movieName, setMovieName] = useState("")

    const handleSearchMovie = (e) => {
        const { value } = e.target;
       setMovieName(value)
        
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (movieName.trim() === '') {
            alert('Enter the film title');
        }

        return (
            <form onChange={handleSubmit}>
                <input
                    onChange={handleSearchMovie}
                    type="text"
                    required
                    minLength={3}
                    name="movieName"
                    value={movieName}

                />
                <button type="submit">Search</button>
            </form>
        )
    }
}
export default PageSearch