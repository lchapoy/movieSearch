import React from 'react';
//movies 20
const Grid = ({items, RenderComponent}) => {
  const itemsArray = items.map(({title, id, poster_path, vote_average})=>(
    <RenderComponent
      key={id}
      title={title}
      image={poster_path}
      votesAvg={vote_average}
    />));
  return (
    <section>
      {itemsArray}
    </section>
  )
}

export default Grid
