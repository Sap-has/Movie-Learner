import React, { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import BanList from './components/BanList';
import movieList from './components/movies.json';  // Assuming you saved the 500 movies in movies.json

function App() {
  const [movie, setMovie] = useState(null);
  const [banList, setBanList] = useState({
    titles: [],
    genres: [],
    years: [],
    ratings: []
  });

  // Utility function to get a random movie from the list
  const getRandomMovie = () => {
    return movieList[Math.floor(Math.random() * movieList.length)];
  };

  // Fetch the movie details using OMDb API and IMDb ID
  const fetchMovieDetails = async (imdbID) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=befa5a5c&i=${imdbID}`);
    const movieDetails = await response.json();
    
    // Check if the movie matches any banned title, genre, year, or rating
    const isBanned = banList.titles.includes(movieDetails.Title) ||
      banList.genres.some(banGenre => movieDetails.Genre.includes(banGenre)) ||
      banList.years.includes(movieDetails.Year) ||
      banList.ratings.includes(movieDetails.Rated);

    if (!isBanned) {
      setMovie(movieDetails);  // Set the movie if it's not banned
    } else {
      fetchRandomMovie();  // Fetch another movie if this one is banned
    }
  };

  // Fetch a random movie from the predefined list
  const fetchRandomMovie = () => {
    const randomMovie = getRandomMovie();  // Get a random movie from the list
    fetchMovieDetails(randomMovie.imdbID); // Fetch its details from OMDb
  };

  // Add an attribute to the ban list
  const addToBanList = (attributeType, attributeValue) => {
    setBanList(prevState => ({
      ...prevState,
      [attributeType]: [...prevState[attributeType], attributeValue]
    }));
  };

  // Clear all filters
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
      <button onClick={clearFilters}>Clear Filters</button> {/* Clear Filters Button */}
    </div>
  );
}

export default App;
