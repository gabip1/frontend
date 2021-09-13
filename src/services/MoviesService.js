import axios from 'axios'

const MOVIES_API_BASE_URL = "https://backend-movie-app.herokuapp.com/api/v1/movies"

class MoviesService {

    getMovies(){
        return axios.get(MOVIES_API_BASE_URL)
    }

    createMovie(movie){
        return axios.post(MOVIES_API_BASE_URL, movie);
    }

    getMovieById(movieId){
        return axios.get(MOVIES_API_BASE_URL + '/' + movieId);
    }

    updateMovie(movie, movieId){
        return axios.put(MOVIES_API_BASE_URL + '/' + movieId, movie);
    }

    deleteMovie(movieId){
        return axios.delete(MOVIES_API_BASE_URL + '/' + movieId);
    }

}

export default new MoviesService()
