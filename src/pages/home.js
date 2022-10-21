import React, {useState} from "react";
import styles from "../pages/styles.module.css"
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () =>{
    const [isPresent,setIsPresent] = useState(false);
    const [searchString, setSearchString] = useState((window.localStorage.getItem("searchString"))?(JSON.parse(window.localStorage.getItem("searchString"))?(JSON.parse(window.localStorage.getItem("searchString"))):""):"");
    const [movieList, setMovieList] = useState((window.localStorage.getItem("MovieRequested"))?(JSON.parse(window.localStorage.getItem("MovieRequested"))?(JSON.parse(window.localStorage.getItem("MovieRequested"))):[]):[]);
    let checker = false;
    const [likedMovies, setlikedMovies] = useState(JSON.parse(window.localStorage.getItem("likedMovies"))?JSON.parse(window.localStorage.getItem("likedMovies")):[]);
    let x = (window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))?(JSON.parse(window.localStorage.getItem("likedMovies"))):[]):[];
    

    const SetMovieDetails =(movieObj) => {
        window.localStorage.setItem("MovieClicked", JSON.stringify(movieObj));
        window.localStorage.setItem("searchString", JSON.stringify(searchString));
        checker = !checker;
    }

    const LikeImg =(movieObj) => {
        let i;
        for (i=0; i<x.length; i++){
            if (x[i].imdbID === movieObj.imdbID){
                setIsPresent(1);
                break;
            }
        }
        if (!isPresent){
            movieObj.isLiked = true;
            setIsPresent(1);
            window.localStorage.setItem("likedMovies", JSON.stringify([...x, movieObj]));
            setlikedMovies([...x, movieObj]);
        }
        else{
            movieObj.isLiked = false;
            setIsPresent(0);
            x.splice(i, 1);
            window.localStorage.removeItem("likedMovies");
            window.localStorage.setItem("likedMovies", JSON.stringify(x));
            setlikedMovies(x);
        }
    }

    const RequestAPI = async () =>{
        let apikey = "dd352830";
        let mL = [];
        for (let page_num = 1; page_num<2; page_num++){
            let url = "http://www.omdbapi.com/?i=tt3896198&apikey=" + apikey + "&type=movie&page=" + page_num + "&s=" + searchString;
            await axios.get(url).then(
                d => {
                    let data = d.data.Search;
                    for (let i = 0; i<data.length; i++){
                        mL.push({ "imdbID" : data[i]["imdbID"],
                        "Title" : data[i]["Title"],
                        "Poster" : data[i]["Poster"],
                        "Year" : data[i]["Year"],
                        "isLiked" : false,
                        "isDisliked" : true});
                    }
                }
        ).catch((e)=>{console.log(e)});
        }
        setMovieList(mL);
        window.localStorage.setItem("MovieRequested", JSON.stringify(mL));
    }

    if (searchString&&checker){
        RequestAPI();
        checker=!checker;
    }


    return (
        <>
        <div className={styles.searchBar}>
            <input type="text" value = {searchString} onChange={(e)=>setSearchString(e.target.value)} placeholder="Search your movie here..." className={styles.searchInput}/>
            <button type="submit" className={styles.searchButton} onClick={()=>{RequestAPI()}}>
                Search
            </button>
        <Link to="/liked"><p className={styles.addTools}>&#x2661;<span className={styles.num}>{likedMovies.length}</span></p></Link>
        </div>
        
            {
                movieList.map((movie)=>{
                    return (
                        <>
                        <div className = {styles.searchDisp}>
                        <Link to={"/movie/" + movie.imdbID} onClick={()=>{SetMovieDetails(movie)}}><img alt={movie.imdbID} src={movie.Poster} className = {styles.searchImgDisp}/></Link>
                        <div key={movie.imdbID} className={styles.littleInfo}>
                            {movie.isLiked ?
                            <div className={styles.notlikeButton} onClick={()=>{LikeImg(movie)}}>&hearts;</div> : 
                            <div className={styles.likeButton} onClick={()=>{LikeImg(movie)}}>&#x2661;</div>}

                            <div className={styles.movieTitle}>
                                <h3>{movie.Title}</h3>
                            </div>
                        </div>
                        </div>
                        </>
                    )
                }
                )
            }
        </>
    )
};

export default Home;