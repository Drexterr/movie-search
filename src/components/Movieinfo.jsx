import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "http://www.omdbapi.com?apikey=29be82ed";

const Movieinfo = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-white'>
      <h1>{movieDetails.Title}</h1>
      <p>{movieDetails.Plot}</p>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      {/* Display other movie details as needed */}
    </div>
  );
}

export default Movieinfo;
