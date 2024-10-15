import React from 'react';
import './MovieDisplay.css'; // Add this line at the top of your MovieDisplay.jsx

function MovieDisplay({ movie, addToBanList }) {
  const { Title, Year, Genre, Rated, Poster, Director, Plot } = movie;

  return (
    <div className="movie-display">
      <h2>{Title} ({Year})</h2>
      <img src={Poster} alt={Title} />
      <p><strong>Director:</strong> {Director}</p>
      <p><strong>Genre:</strong> {Genre}</p>
      <p><strong>Rating:</strong> {Rated}</p>
      <p><strong>Plot:</strong> {Plot}</p>
      
      <h4>Ban Attributes:</h4>
      <div>
        <button onClick={() => addToBanList('titles', Title)}>Ban Title</button>
        <button onClick={() => addToBanList('years', Year)}>Ban Year</button>
        <button onClick={() => addToBanList('ratings', Rated)}>Ban Rating</button>
        {/* Genres can have multiple values, so we map through them */}
        {Genre.split(', ').map((genre, index) => (
          <button key={index} onClick={() => addToBanList('genres', genre)}>Ban Genre: {genre}</button>
        ))}
      </div>
    </div>
  );
}

export default MovieDisplay;
