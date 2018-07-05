import React from 'react';

const Card = ({ name, breed, slug }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='dog' src={`https://unsplash.com/photos/#{slug}}' />
      <div>
        <h2>{name}</h2>
        <p>{breed}</p>
      </div>
    </div>
  );
}

export default Card;
