// src/Card.js
import React from 'react';


function Card({ title, content, picture }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={picture} alt="Card Image" />
      <button className="AddToCardBtn">Add to Card</button>
    </div>
  );
}

export default Card;
