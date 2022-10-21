import React, { useState } from "react";
import styles from "../pages/styles.module.css"
import { Link} from "react-router-dom";

const Movies = () =>{
    const [isPresent,setIsPresent] = useState(false);
    let movie = JSON.parse(window.localStorage.getItem("MovieClicked"));
    const [likedMovies, setlikedMovies] = useState((window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))):[]):[]);
    let x = (window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))):[]):[];
    
    const LikeImg =(movieObj) => {
        let i;
        for (i=0; i<x.length; i++){
            if (x[i].imdbID === movieObj.imdbID){
                setIsPresent(true);
                break;
            }
        }
        if (!isPresent){
            window.localStorage.setItem("likedMovies", JSON.stringify([...x, movieObj]));
            setlikedMovies([...x, movieObj]);
        }
        else{
            x.splice(i, 1);
            window.localStorage.removeItem("likedMovies");
            window.localStorage.setItem("likedMovies", JSON.stringify(x));
            setlikedMovies(x);
        }
    }
    
    return (
        <>
        <div className={styles.addTools}>&#x2661; <span className={styles.num}>{likedMovies.length}</span></div>
            <img alt="" src={movie.Poster}/><br/>
            <button onClick={()=>{LikeImg(movie)}}> Like </button>
            <Link to="/">
                <button> Back </button>
            </Link>
        </>
    )
};

export default Movies;