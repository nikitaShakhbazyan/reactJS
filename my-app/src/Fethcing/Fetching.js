import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dummyjson.com/products";
        const resp = await fetch(url);

        if (resp.ok) {
          const response = await resp.json();
          const Result = response.products;
          setData(Result);

        } else {
          throw new Error("Fetch error");
        }
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

const SlisedData = data.slice(0,10)

const pickupFunc = (()=> {
    setItems([...items, newItem]); 
    setNewItem('');
})

  return (
    <div>
      <h1>Cards</h1>
    <p>Added items:</p>
  <ul>
    {items.map((addedItem, index) => (
      <li key={index}>{addedItem.title}</li>
    ))}
  </ul>
      <StyledMainDiv>
        {SlisedData.map((item) => (
            <ItemDiv>
          <divWithKey key={item.id}>
            <img src={item.thumbnail} alt='Item'/>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </divWithKey>
          <button onClick={pickupFunc}>Add products to Cart</button>
          </ItemDiv>
        ))}
      </StyledMainDiv>
    </div>
  );
}

export default Cards;


const StyledMainDiv = styled.div `
background-color:grey;
display:grid;
grid-template-columns:50% 50%;
border:2px solid gold

`
const ItemDiv = styled.div `
border:2px solid green;
padding:10px;
display:flex;
justify-content:space-around;
flex-direction:column;
`
const divWithKey = styled.div `
width:40%;
height:auto;
`