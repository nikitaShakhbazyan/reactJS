import React from 'react'
import useFetch from "../useFetch/useFetch"
import styles from './georgian.module.css';
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";


const url = 'http://universities.hipolabs.com/search?country=Georgia'

function Home () {
    const { data, loading, error } = useFetch(url);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }



      const mappedData = data.map((university) =>(
        <div className={styles.container}>
        <h2 key={university.id} style={{color:'red'}}>
         {university.name}</h2>
        <h4>Web Page : {university.web_pages[0]}</h4>
        <h4>Domain : <a href={'http://' + university.domains}>{university.domains}</a></h4>

        <button className={styles.buttonForMore}>
            Click for more info
            </button>
        </div>

      ))
    
      return (
        <div className={styles.main}>
        <div className={styles.inMain}>
            {mappedData}
        </div>

        </div>
      );
    }

export default Home
