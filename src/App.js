import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";



const API_URL=`http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`



const App=()=>{

    const [movies,setMovies]=useState([]);

    const [searchTerm,setSearchTearm]= useState("");

    const searchmovies= async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        
        setMovies(data.Search)

        console.log(data)
    }

    useEffect(()=>
    {
            searchmovies("Superman");
    },[])



    return(
        <div className="container">
            <h1>ReelRadar</h1>

            <div className="search">
                <input placeholder="Search the title" 
                    value={searchTerm}
                    onChange={(e)=>(setSearchTearm(e.target.value))}
                    type="text"/>
                    <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=>searchmovies(searchTerm)}/>
            </div>


            {
                movies?.length > 0 
                    ? (
                        <div className="container">
                            {movies.map((movie)=>(
                                <  MovieCard movie={movie}/>
                            ))}
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