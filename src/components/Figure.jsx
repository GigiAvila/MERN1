import React from 'react';

const Figure = ({ image, title, date, copyright, explanation }) => {
  return (
    <div>
      <br />
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>
        <h3>Fecha: {date}</h3>
        <h4>{explanation}</h4>
      </div>
      <p>Derechos de autor: {copyright}</p>

    </div>
  );
};

export default Figure;
