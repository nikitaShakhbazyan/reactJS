import React, { useState, useEffect } from 'react';

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
      <ul>
        {SlisedData.map((item) => (
            <div>
          <p key={item.id}>{item.title}</p>
          <button onClick={pickupFunc}>Add products to Cart</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cards;

  
