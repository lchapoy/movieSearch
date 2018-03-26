import React from 'react';

const Movie = ({title, image, votesAvg})=>{

  return (
    <div>
      <h4>{title}</h4>
      <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
      <p>
        {votesAvg}
      </p>
    </div>
  )
}

export default Movie;
