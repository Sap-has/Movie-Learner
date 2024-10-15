import React, { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import BanList from './components/BanList';
import movieList from './components/movies.json'; 

function App() {
  const [movie, setMovie] = useState(null);
  const [banList, setBanList] = useState({
    titles: [],
    genres: [],
    years: [],
    ratings: []
  });

  const getRandomMovie = () => {
    return movieList[Math.floor(Math.random() * movieList.length)];
  };

  const fetchMovieDetails = async (imdbID) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=YOUR_API__KEY&i=${imdbID}`);
    const movieDetails = await response.json();
    
    const isBanned = banList.titles.includes(movieDetails.Title) ||
      banList.genres.some(banGenre => movieDetails.Genre.includes(banGenre)) ||
      banList.years.includes(movieDetails.Year) ||
      banList.ratings.includes(movieDetails.Rated);

    if (!isBanned) {
      setMovie(movieDetails); 
    } else {
      fetchRandomMovie(); 
    }
  };

  const fetchRandomMovie = () => {
    const randomMovie = getRandomMovie();  
    fetchMovieDetails(randomMovie.imdbID); 
  };

  const addToBanList = (attributeType, attributeValue) => {
    setBanList(prevState => ({
      ...prevState,
      [attributeType]: [...prevState[attributeType], attributeValue]
    }));
  };

  const clearFilters = () => {
    setBanList({
      titles: [],
      genres: [],
      years: [],
      ratings: []
    });
  };

  useEffect(() => {
    fetchRandomMovie();
  }, [banList]);

  return (
    <div className="App">
      <h1>Discover Movies</h1>
      {movie ? (
        <MovieDisplay movie={movie} addToBanList={addToBanList} />
      ) : (
        <p>Loading...</p>
      )}
      <BanList banList={banList} />
      <button onClick={fetchRandomMovie}>Fetch New Movie</button>
      <button onClick={clearFilters}>Clear Filters</button> {}
    </div>
  );
}

export default App;
