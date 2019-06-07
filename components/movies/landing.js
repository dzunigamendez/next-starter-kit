import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const API_KEY = '97a5b47428f2d1e11f42317d0ce3c263';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const Movie = styled.figure`
  margin: 0;
  padding: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

function Landing() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(URL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const items = movies.map(movie => {
    return (
      <Movie key={movie.id}>
        <img
          src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </Movie>
    );
  });

  return (
    <div>
      <Title>Movie News!</Title>
      <p>Popular...</p>
      <Grid>{items}</Grid>
    </div>
  );
}

export default Landing;
