import React, { Component } from 'react';
import Header from './header';
import SearchBar from './components/searchBar';
import Grid from './components/grid/index';
import Movie from './components/movie';
import { movieAPI } from './utils/api';
// import * as API from './utils/api'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      movies: []
    }
  }

  getMovies = () => {
    const { title } = this.state
    movieAPI.getMovies(title)
      .then((response)=>{
        this.setState({
          title: '',
          movies: response.data.results
        })
      })
  }

  searchInput = (ev) => {
    this.setState({
      title: ev.target.value
    });
  }

  render() {
    const { title, movies } = this.state;
    return (
      <div className="App">
        <Header/>
        <SearchBar
          label="Movie title:"
          placeholder="Please enter movie name"
          buttonHandler={this.getMovies}
          onChange={this.searchInput}
          value={title}
        />
        <Grid
          RenderComponent={Movie}
          items={movies}
        />
      </div>
    );
  }
}

export default App;
