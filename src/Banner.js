import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from "./request";

const Banner = () => {
const [movie, setMovie] = useState([]);


useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random()* request.data.results.length - 1)]
        );
        
    }
    
    fetchData();
    
    
    },[]);


    return (
        <header className="banner"
           style={{
               backgroundSize: "cover",
               backgroundImage: `url(
                   "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`,
               backgroundPosition: "center center",
           }}
        > 

            <div className="banner_contents">
            {/* title */}
            <h1>
                {/* もしーでなければ */}
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div></div>
            {/* div two buttons */}
            {/* discription */}
            </div>
         
        </header>
    )
}

export default Banner
