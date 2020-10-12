import React, { useState, useEffect } from 'react'
// 以下はexport default request をrenmeしたもの
// defaultなので、renameできる
import axios from "./axios";
import './Row.css';

const base_url = "http://image.tmdb.org/t/p/original/";

const Row = ( { title, fetchUrl, isLargeRow } ) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
      async function fetchData () {
        const request = await axios.get(fetchUrl);
// 　　　　 console.log(request);
        setMovies(request.data.results);
        return request;
      };
      fetchData();
    },[fetchUrl]);

    return (
        <div className="row">
            {/* titel */}
            <h2>{title}</h2>

            <div className="row_posters">
                {/* severeal row_posters */}
                {movies.map(movie=>(
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                ))}
            </div>
            {/* container => posters */}

            
            
        </div>
    )
}

export default Row
