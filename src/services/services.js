import axios from "axios";


// const API_KEY = 'api_key=893c12f0a1ede0fe074beb3a88fbc87a'


 const MovieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '893c12f0a1ede0fe074beb3a88fbc87a',
    }
})





export const getTrending = async () => {
  const { data } = await MovieApi.get('trending/movie/day',);
  return data;
};

export const getSearch  = async params => {
  const { data } = await MovieApi.get('/search/movie', { params });
  return data;
};

export const getDetails  = async id => {
  const { data } = await MovieApi.get(`/movie/${id}` );
  return data;
};

export const getCredits  = async id => {
  const { data } = await MovieApi.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews  = async id => {
  const { data } = await MovieApi.get(`/movie/${id}/reviews`);
  return data;
};
