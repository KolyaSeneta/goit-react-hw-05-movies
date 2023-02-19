import axios from "axios";


// const API_KEY = 'api_key=893c12f0a1ede0fe074beb3a88fbc87a'

const END_POINTS = {
  trending: '/trending/movie/week',
    search: '/search/movie',
    details: '/movie/',
    credits: '/movie/',
  reviews: '/movie/',
};

const MovieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '893c12f0a1ede0fe074beb3a88fbc87a',
    }
})


const getTranding = async ({  }) => {
    const data= await MovieApi.get(`${END_POINTS.trending}`)
    return data
}


const getSearch = async ({}) => {
    const data= await MovieApi.get(`${END_POINTS.search}`)
    return data
}


const getDetails = async ({}) => {
    const data= await MovieApi.get(`${END_POINTS.details}/`)
    return data
}


const getCredits = async ({}) => {
    const data= await MovieApi.get(`${END_POINTS.credits}/`)
    return data
}


const getReviews = async ({}) => {
    const data= await MovieApi.get(`${END_POINTS.reviews}/`)
    return data
}

export default {getTranding, getSearch, getDetails, getCredits, getReviews}