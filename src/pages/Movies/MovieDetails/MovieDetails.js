import { useState } from 'react';
import { fetchMovieDetails } from 'components/api/api';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <div>
        <div>
          <img alt="" />
          <ul>
            <li></li>
            <li>info</li>
            <li>info</li>
          </ul>
        </div>
      </div>
    </>
  );
};
