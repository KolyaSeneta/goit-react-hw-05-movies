import { Link, useLocation } from "react-router-dom"
import css from '../GoBack/goBack.module.scss'



const GoBack = () => {
const location = useLocation()

    return (
        <div className="">
            <Link className={css.goBack} to={location.state?.from ?? "/"} >Go Back</Link>
            </div>
    )
}

export default GoBack