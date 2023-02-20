import { Route, Routes } from 'react-router-dom';
// import Home from "./Pages/Home/Home"
// import  Movies  from "./Movies/Movies"
// import  MovieDetails  from "./MovieDetails/MovieDetails"
// import {Cast}  from "./Cast/Cast"
// import Reviews from "./Reviews/Reviews"
import  PageButton  from './Pages/PageButton/PageButton'
import { lazy, Suspense } from "react";


const Home = lazy(() => import('./Pages/Home/Home') )
const MovieDetails = lazy(() =>  import("./MovieDetails/MovieDetails") )
const Movies = lazy(() =>  import("./Movies/Movies") )
const Cast = lazy(() =>  import("./Cast/Cast") )
const Reviews = lazy(() =>  import("./Reviews/Reviews") )



export const App = () => {


  return (
    <>
      <header>
        <nav>
         <PageButton />
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
       <Routes >
        <Route path="/"  element={<Home />} />
         <Route path="/movies"  element={<Movies/>} />
           <Route path="/movies/:movieId"  element={<MovieDetails/>}>
             <Route  path="cast" element={<Cast/>}/>
             <Route  path="reviews" element={<Reviews/>}/>
           </Route>
        </Routes>
      </Suspense>
    </>
  )
}