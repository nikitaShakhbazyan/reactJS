import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function Fetching() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  }, []);

  const confirmDelete = (post) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      setPosts(updatedPosts);
      console.log('Post deleted:', post.id);
    }
  };

  return (
    <div>
      <h1>Array</h1>
      <MainDiv>
        {posts.map((post) => (
          <Container key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => confirmDelete(post)}>Close</button>
          </Container>
        ))}
      </MainDiv>
    </div>
  );
}

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

const Container = styled.div`
  background-color: grey;
  border: 2px solid red;
  margin: 5px;
  border-radius:30px;
`;
