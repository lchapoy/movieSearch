import axios from 'axios';


class movieAPI {
  constructor(apiKey){
    this.api_key = apiKey;
  }
  getMovies(query){
    const { api_key } = this;
    return axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key,
        query
      }
    })
  }
}

export default movieAPI;
