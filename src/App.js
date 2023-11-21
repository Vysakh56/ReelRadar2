import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";



const API_URL="http://www.omdbapi.com?apikey=19b3fb15"



const App=()=>{

    const [movies,setMovies]=useState([]);

    const searchmovies= async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        
        setMovies(data.search)
    }

    useEffect(()=>
    {
            searchmovies("Superman");
    },[])

    const movie1 ={
        "Title": "Superman",
        "Year": "1978",
        "imdbID": "tt0078346",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    }
    

    return(
        <div className="container">
            <h1>ReelRadar</h1>

            <div className="search">
                <input placeholder="Search the title" 
                    value="Superman"
                    onChange={()=>{}}
                    type="text"/>
                    <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=>{}}/>
            </div>


            {
                movies?.length > 0 
                    ? (
                        <div className="container">

                        <   MovieCard movie1={movies[0]}/>
                        </div>
                      )

                    : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                    

            }

           
        </div>
    );
}



export default App