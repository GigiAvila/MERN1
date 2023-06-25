import React from 'react';

const Figure = ({ image, title, date, copyright, explanation }) => {
  return (
    <>
      <div className='Figure'>
        <div className='FigureImg'>
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <p>Copyright: {copyright}</p>
        </div>
        <div className='FigureText'>
          <h3>Date: {date}</h3>
          <h4>{explanation}</h4>
        </div>
      </div>
    </>
  );
};

export default Figure;
