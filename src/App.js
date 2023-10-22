import React, { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './Search.svg'
import MovieCard from './MovieCard'
// 24f8e727

const API_URL = 'http://www.omdbapi.com?apikey=24f8e727'

const App = ()=>{
    const [movies, setMovies] = useState([])
    const [searchTerm,SetSearchTerm] = useState('');
    const SearchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);

        setMovies(data.Search)
    }
    useEffect(() => {
        SearchMovies('Spiderman')
    }, [])
    return(
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input type="text" placeholder="Search for Movie" value={searchTerm} onChange={(e)=>{SetSearchTerm(e.target.value)}}/>
                <img src={SearchIcon} alt="search" onClick={()=>{SearchMovies(searchTerm)}} />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">\
                        {movies.map((movie,index)=>(
                            <MovieCard movie={movie} key={index}/>
                    ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movie found</h2>
                    </div>
                )
            }
            
        </div>
    );
}


export default App;