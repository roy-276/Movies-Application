import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      Title: 'John Wick',
      Year: '2014',
      imdbID: 'tt2911666',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
    },
    {
      Title: 'John Wick: Chapter 2',
      Year: '2017',
      imdbID: 'tt4425200',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg',
    },
    {
      Title: 'John Wick: Chapter 3 - Parabellum',
      Year: '2019',
      imdbID: 'tt6146586',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg',
    },
  ]);
  return (
    <div className="container-fluid movies-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
