import { NavLink, useLocation } from "react-router-dom"
import css from '../PageButton/PageButton.module.scss'


const PageButton = () => {
    const location = useLocation()
    return (
        <div className={css.container}>
            <div className={css.Buttons}> 
            <NavLink className={css.btn} to="/" state={{from:location}} >Home</NavLink >
          
            <NavLink className={css.btn} to="/movies" >Movies</NavLink>
           </div>
        </div>
    )
}

export default PageButton