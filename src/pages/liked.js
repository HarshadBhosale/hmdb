import React, { useState } from "react";
import styles from "../pages/styles.module.css"
import { Link} from "react-router-dom";

const Movies = () =>{
    const [likedMovies, setLikedMovies] = useState((window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))):[]):[])


    
    return (
        <>
        {
                likedMovies.map((movie)=>{
                    {console.log(movie)}
                    return (
                        <>
                        <div><img src={movie.Poster}/>
                        </div>
                        </>
                    )
                }
                )
            }
        </>
    )
};

export default Movies;